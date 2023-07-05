import React, { useState } from 'react';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { DetailOrderDocument, ListOrderAdminDocument, PaymentMethod, ShippingStatus } from '@/graphql/generated';
import { da } from 'date-fns/locale';
import { convertFormatPriceToNumber } from '@/utils/number';
import { formatCurrency } from '@/utils/format-currency';
import Link from 'next/link';
import Image from 'next/image';
import useConfirmOrder from '@/components/Order/services/hook/useConfirmOrder';
import { useRouter } from 'next/router';
import { AiFillPrinter } from 'react-icons/ai';
import usePrintOrder from '@/components/Order/services/hook/usePrintOrder';
import ModalConfirm from '@/components/ModalConfirm';

export async function getStaticPaths() {
  const queryClient = await graphqlClientRequest(true);

  let notFound = false;
  const result: any = await queryClient.request(ListOrderAdminDocument, {}).catch(error => {
    console.log('>> Get List Order error: ', error?.message);
    notFound = true;
  });
  const paths = result?.listOrderAdmin.orders.map((order: any) => {
    return {
      params: { id: order?._id?.toString() }
    };
  });
  return {
    paths,
    fallback: false
  };
}
export async function getStaticProps({ params }: any) {
  const queryClient = graphqlClientRequest();
  let notFound = false;
  const result: any = await queryClient
    .request(DetailOrderDocument, {
      input: { orderId: params?.id }
    })
    .catch(error => {
      console.log('>> Get Order details error: ', error?.message);
      notFound = true;
    });

  return {
    props: {
      data: result
    },
    revalidate: 1,
    notFound
  };
}

const DetailOrder = ({ data }: any) => {
  const { handlePrintOrder } = usePrintOrder();
  const { handleConfirmOrder, confirmOrderLoading } = useConfirmOrder();
  const router = useRouter();
  const detailOrder = data.detailOrder;

  const [isOpen, setIsOpen] = useState<any>(false);
  const [prop, setProp] = useState<any>({});
  const [onOK, setOnOK] = useState<any>();

  const createdAt = new Date(detailOrder.createdAt);
  const options = { timeZone: 'UTC' };
  createdAt.setUTCHours(createdAt.getUTCHours() + 7); // Thêm 7 giờ để chuyển đổi múi giờ
  const localDateTime = createdAt.toLocaleString('en-US', options);
  const handleConfirm = () => {
    handleConfirmOrder(detailOrder._id);
    setIsOpen(false);
    router.push(`./${detailOrder._id}`);
  };
  const handlePrint = () => {
    handlePrintOrder(detailOrder._id);
    setIsOpen(false);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className=" text-amber-600 font-bold flex mb-2">
        <span className="mr-32">CHI TIẾT HOÁ ĐƠN</span>
        {detailOrder.shippingStatus === ShippingStatus.NotShipped ? (
          <button
            className="text-white ml-5 bg-orange-700 p-1 text-sm rounded-md font-thin "
            onClick={() => {
              setIsOpen(true);
              setProp({
                title: 'XÁC NHẬN',
                content: 'Bạn có chắc chắn xác nhận đơn hàng này?'
              });
              setOnOK(() => handleConfirm);
            }}
          >
            Xác Nhận Đơn Hàng
          </button>
        ) : (
          <span className="ml-5 text-white text-sm bg-green-600 font-thin p-1">Đã Xác Nhận</span>
        )}

        <button
          className="text-white  flex items-center ml-5 bg-cyan-700  font-thin p-1 text-sm rounded-md"
          onClick={() => {
            setIsOpen(true);
            setProp({
              title: 'XÁC NHẬN',
              content: 'Bạn có chắc chắn in đơn hàng này?'
            });
            setOnOK(() => handlePrint);
          }}
        >
          <AiFillPrinter /> <span className="ml-2">In Hoá Đơn</span>
        </button>
      </div>
      <div className="w-full bg-white flex p-10">
        <div className="p-5  border-r-orange-700 border-r-2">
          <Image
            src={
              detailOrder.userId?.avatarId?.url
                ? `${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${detailOrder.userId.avatarId.url}`
                : '/images/placeholder.jpg'
            }
            alt=""
            width={100}
            height={100}
            className="rounded-full mb-5"
          ></Image>
          <div className=" mb-5">
            Họ Tên: <span className="p-2 text-yellow-700">{detailOrder.userId?.fullName || ''}</span>
          </div>
          <div className=" mb-5">
            Số Điện Thoại: <span className="p-2 text-yellow-700">{detailOrder.userId?.phoneNumber || ''}</span>
          </div>
          <div className=" mb-5">
            Địa chỉ: <span className="p-2 text-yellow-700">{detailOrder.shippingAddress || ''}</span>
          </div>
          <div className=" mb-5">
            Hình thức thanh toán:{' '}
            <span className="p-2 text-yellow-700">
              {detailOrder.paymentMethod === PaymentMethod.Offline
                ? 'Thanh toán khi nhận hàng'
                : detailOrder.transaction.gateway}
            </span>
          </div>
        </div>
        <div className=" flex flex-col p-5">
          <div>
            {' '}
            Mã hoá đơn: <span className="text-orange-500 p-2"> {detailOrder.code}</span>
          </div>
          <div>
            {' '}
            Ngày tháng: <span className="p-2 text-yellow-700"> {localDateTime}</span>
          </div>
          <div>
            {' '}
            Mô tả: <span className="p-2 text-yellow-700"> {detailOrder.description}</span>
          </div>
          <div>
            {' '}
            Tổng số tiền: <span className="p-2 text-yellow-700"> {formatCurrency(detailOrder.amount)}</span>
          </div>
          <div> Danh sách sản phẩm:</div>
          <div>
            {detailOrder.items.map((item: any, index: number) => (
              <Link key={index} href={`/product/${item.id._id}`} className="flex m-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${item.id.image.url}`}
                  alt=""
                  width={100}
                  height={100}
                ></Image>{' '}
                <div className="flex flex-col m-2 text-yellow-700">
                  <span>Name: {item.name}</span>
                  <span>Price: {formatCurrency(item.id.price)}</span>
                  <span>Quantity: {item.quantity}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ModalConfirm isOpen={isOpen} onOk={onOK} onCancel={handleClose} prop={prop} />
    </>
  );
};

export default DetailOrder;
