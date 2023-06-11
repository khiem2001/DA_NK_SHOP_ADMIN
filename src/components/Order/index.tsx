import React, { useState, useEffect } from 'react';
import { useListOrderAdmin } from './services/hook/useListOrderAdmin';
import { formatCurrency } from '@/utils/format-currency';
import { OrderStatus, PaymentMethod, PaymentProvider, PaymentType, ShippingStatus } from '@/graphql/generated';
import { LoadingCenter } from '../Loading';
import DataTable, { TableColumn } from 'react-data-table-component';
import { ImageItem } from './styled';
import Link from 'next/link';
import Avatar from '../Messager/components/Avatar';
import useConfirmOrder from './services/hook/useConfirmOrder';
import { usePrintOrder } from './services/hook/usePrintOrder';

const customStyles = {
  cells: {
    style: {
      fontSize: '16px',
      padding: '4px 15px'
    }
  },
  headRow: {
    style: {
      backgroundColor: 'black',
      color: 'white'
    }
  },
  headCells: {
    style: {
      fontSize: '18px'
    }
  }
};

const Order = () => {
  const { listOrder, isLoading } = useListOrderAdmin();
  const { handleConfirmOrder, confirmOrderLoading } = useConfirmOrder();
  const [orderId, setOrderId] = useState('');
  const { printOrder } = usePrintOrder(orderId);

  useEffect(() => {
    if (printOrder && printOrder.pdfPath) {
      console.log(printOrder);
      window.open('D:/Đồ Án Tốt Nghiệp/OrderPdf/order.1686222652286.pdf', '_blank');
    }
  }, [printOrder]);

  const columns: any[] = [
    {
      name: 'Mã Đơn Hàng',
      selector: (row: any) => <span className="bg-slate-600 p-2 text-white">{row.code}</span>
    },
    {
      name: 'Khách Hàng',
      selector: (row: any) => (
        <div className="flex items-center">
          <Avatar props={{ image: process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + row.userId.avatarId.url }} />
          <span className="ml-1">{row.userId.fullName}</span>
        </div>
      )
    },
    {
      name: 'Ngày Mua',
      selector: (row: any) => {
        const createdAt = new Date(row.createdAt);
        const options = { timeZone: 'UTC' };
        createdAt.setUTCHours(createdAt.getUTCHours() + 7); // Thêm 7 giờ để chuyển đổi múi giờ
        const localDateTime = createdAt.toLocaleString('en-US', options);
        return localDateTime;
      },
      sortable: true
    },
    {
      name: 'Danh Sách Sản Phẩm',
      cell: (row: any) => (
        <div>
          {row.items.map((obj: any) => (
            <Link href={'/products/' + obj.id._id} className="flex ">
              <ImageItem src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${obj?.id?.image?.url || ''}`} />
              <div className="ml-2 text-blue-700 text-sm">{obj.id.name}</div>
            </Link>
          ))}
        </div>
      )
    },
    {
      name: 'Tổng Thanh Toán',
      selector: (row: any) => <span className="font-bold text-orange-600">{formatCurrency(row.amount)}</span>
    },
    {
      name: 'Hình Thức Thanh Toán',
      selector: (row: any) =>
        row.paymentMethod === PaymentMethod.Online ? (
          row.transaction.gateway === 'zalopay' ? (
            <div className="flex">
              <div>
                <img src="/images/zalopay_logo.jpg" alt="ZaloPay" className="h-6 w-6 mr-2" />
              </div>
              <div className="averta-semibold font-bold text-slate-500">ZaloPay</div>
            </div>
          ) : (
            <div className="flex ">
              <div>
                <img src="/images/vnpay_logo.png" alt="VNPay" className="h-6 w-6 mr-2" />
              </div>
              <div className="averta-semibold font-bold text-slate-500">VNPay</div>
            </div>
          )
        ) : (
          <div className="font-bold text-slate-500">Thanh toán khi nhận hàng</div>
        )
    },

    {
      name: 'Địa chỉ nhận hàng',
      selector: (row: any) => <div className="text-sm overflow-x-auto whitespace-nowrap">{row.shippingAddress}</div>
    },
    {
      name: 'Xác Nhận Đơn Hàng',
      selector: (row: any) => (
        <div>
          {row.shippingStatus === ShippingStatus.NotShipped ? (
            <button
              className="text-white bg-orange-700 p-1 text-sm rounded-md"
              onClick={() => handleConfirmOrder(row._id)}
            >
              Xác Nhận
            </button>
          ) : row.shippingStatus === ShippingStatus.Shipping ? (
            <span className="bg-green-600 text-white p-1 text-sm">Đã Xác Nhận</span>
          ) : (
            'Đơn hàng đã được giao'
          )}
          <button className="text-white bg-cyan-700 ml-2 p-1 text-sm rounded-md" onClick={() => setOrderId(row._id)}>
            In HD
          </button>
        </div>
      )
    }
  ];

  const [records, setRecords] = useState(listOrder);
  useEffect(() => {
    setRecords(listOrder);
  }, [isLoading, listOrder]);
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value.toLowerCase();
    const newData = listOrder.filter(row =>
      row.items?.some((obj: any) => obj.id.name.toLowerCase().includes(filterValue))
    );
    setRecords(newData);
  };

  return (
    <div className="flex justify-between flex-col  mb-12 ">
      <div className="text-2xl mt-4 mb-4 text-orange-500">Danh Sách Đơn Hàng</div>
      <input
        className="py-4 px-4 w-2/4 outline-none mb-12"
        type="text"
        placeholder="Tìm kiếm..."
        onChange={handleFilter}
      />
      {isLoading ? (
        <LoadingCenter />
      ) : (
        <DataTable
          columns={columns}
          data={records || []}
          pagination
          striped
          customStyles={customStyles}
          responsive
          highlightOnHover
        />
      )}
    </div>
  );
};

export default Order;
