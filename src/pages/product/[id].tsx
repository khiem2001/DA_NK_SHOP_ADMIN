import Loading, { LoadingCenter } from '@/components/Loading';
import useCreateComment from '@/components/Product/services/hook/useCreateComment';
import { useListComment } from '@/components/Product/services/hook/useListComment';
import { useListFeedback } from '@/components/Product/services/hook/useListFeedback';
import { GetListProductDocument, GetProductDocument } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { formatCurrency } from '@/utils/format-currency';
import { Button } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import styled from 'styled-components';

interface ImageProps {
  width: number;
  height: number;
}

export const ImageCommon = styled.img<ImageProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  object-fit: cover; /* Cắt hình ảnh để vừa khớp với kích thước */
  object-position: center; /* Hiển thị phần tử trung tâm của hình ảnh */
`;
export const ItemComment = styled.div`
  margin: 20px;
  padding: 10px 10px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  display: flex;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 25px;
    border: 1px solid #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;
export const DetailComment = styled.div`
  span {
    font-size: 15px;
    padding-right: 10px;
    margin-right: 10px;
  }
  span:nth-child(1) {
    border-right: 1px solid #ccc;
  }
`;

export const ContentComment = styled.p`
  max-height: 100px;
  width: 100%;
  padding: 10px;
  overflow: auto;
`;
export const ButtonComment = styled.button`
  margin-left: 20px;
  color: #065991;
  font-size: 40px;
  &:hover {
    color: #3e94e4;
  }
`;
export const ListComment = styled.div`
  border: 1px solid #7c7c7c;
  margin-top: 20px;
  border-radius: 10px;
  width: 100%;
  height: 750px;
  overflow-y: scroll;
`;
export async function getStaticPaths() {
  const queryClient = await graphqlClientRequest(true);

  let notFound = false;
  const result: any = await queryClient
    .request(GetListProductDocument, {
      input: {
        pagination: {
          limit: 1000,
          page: 1
        }
      }
    })
    .catch(error => {
      console.log('>> Get List Order error: ', error?.message);
      notFound = true;
    });
  const paths = result?.getListProduct.products.map((product: any) => {
    return {
      params: { id: product?._id?.toString() }
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
    .request(GetProductDocument, {
      input: { productId: params?.id }
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
const DetailProduct = ({ data }: any) => {
  const detailProduct = data.getProduct.product;
  const { listComment, isLoading } = useListComment({ id: detailProduct._id });
  const [parentId, setParentId] = useState('');
  const [showFeedback, setShowFeedBack] = useState(false);
  const { listFeedback } = useListFeedback(parentId);
  const [comment, setComment] = useState('');

  const [feedBack, setFeedBack] = useState(false);
  const { handleCreateCommentAdmin } = useCreateComment();

  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  };
  const handleComment = (event: any) => {
    event.preventDefault();

    handleCreateCommentAdmin(comment, detailProduct._id, parentId);
    setComment('');
  };

  return (
    <div className="flex flex-col">
      <div className=" text-amber-600 font-bold flex mb-2">CHI TIẾT SẢN PHẨM</div>
      <div className="flex md:max-lg:flex-col w-full pb-5">
        <div className="flex flex-col md:max-lg:w-full w-2/4 p-5">
          <Image
            src={process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + detailProduct.image.url}
            alt=""
            width={200}
            height={200}
            className=" mb-5"
          ></Image>

          <div className="mb-5 text-xl flex">
            <span className="flex items-center">
              {detailProduct.totalLike}
              <MdFavorite className="ml-2" />
            </span>
            <span className="flex items-center ml-5">
              {detailProduct.totalComment}
              <FaCommentAlt className="ml-2" />
            </span>
            <span className="flex items-center ml-5 text-orange-600 font-bold ">
              {formatCurrency(detailProduct.price)}
            </span>
          </div>
          <div className="mb-5">
            Tên Sản Phẩm: <span className="text-yellow-700 ">{detailProduct.name}</span>
          </div>
          <div className="mb-5">
            Mô Tả: <span className="text-yellow-700">{detailProduct.description}</span>
          </div>
          <div className="mb-5">
            Thương Hiệu: <span className="text-yellow-700">{detailProduct.manufacturer}</span>
          </div>
          <div className="mb-5">
            Phân Loại: <span className="text-yellow-700">{detailProduct.type}</span>
          </div>
          <div className="mb-5">
            Mã Số: <span className="text-yellow-700">{detailProduct.modelNumber}</span>
          </div>
          <div className="mb-5">
            Kích Thước: <span className="text-yellow-700">{detailProduct.dimensions}</span>
          </div>
          <div className="mb-5">
            Trọng Lượng: <span className="text-yellow-700">{detailProduct.weight}</span>
          </div>
          <div className="mb-5">
            Kết Nối: <span className="text-yellow-700">{detailProduct.connectivity}</span>
          </div>
          <div className="mb-5">
            Phương Thức Cấp Điện: <span className="text-yellow-700">{detailProduct.powerSource}</span>
          </div>
          <div className="mb-5">
            Ứng Dụng Tương Thích: <span className="text-yellow-700">{detailProduct.compatibility}</span>
          </div>
          <div className="mb-5">
            Bảo Hành: <span className="text-yellow-700">{detailProduct.warranty}</span>
          </div>
        </div>
        <div className="flex flex-col w-2/4 md:max-lg:w-full border-2 border-red-950 p-5">
          <div className=" text-amber-600 font-bold flex mb-2">BÌNH LUẬN CỦA NGƯỜI DÙNG</div>
          <div>
            {feedBack && (
              <form className="flex items-center">
                <textarea
                  id="comment"
                  name="comment"
                  required
                  placeholder=""
                  value={comment}
                  onChange={handleCommentChange}
                  className="w-3/4 rounded-xl px-5"
                ></textarea>
                <ButtonComment onClick={handleComment}>
                  <IoMdSend />
                </ButtonComment>
              </form>
            )}
            <ListComment>
              {isLoading ? (
                <LoadingCenter />
              ) : listComment?.data ? (
                <div>
                  {listComment?.data?.map((obj, index) => (
                    <div key={index}>
                      <ItemComment
                        className={`!bg-slate-200 shadow-md  !grid !grid-cols-12 items-center first-letter:
                      ${feedBack && parentId === obj._id ? 'shadow-orange-300' : ''}
                   `}
                        key={index}
                      >
                        <ImageCommon
                          src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${obj.user?.avatarId?.url}`}
                          alt="Ảnh người dùng"
                          width={500}
                          height={500}
                          className="col-span-2"
                        />
                        <DetailComment className="col-span-10 flex flex-col">
                          <div>
                            <span>{obj.user?.fullName}</span>
                            <span>
                              {(() => {
                                const createdAt = obj.createdAt ? new Date(obj.createdAt) : new Date();
                                createdAt.setUTCHours(createdAt.getUTCHours() + 7); // Thêm 7 giờ để chuyển đổi múi giờ
                                const options = { timeZone: 'UTC' };
                                const localDateTime = createdAt.toLocaleString('en-US', options);
                                return localDateTime;
                              })()}
                            </span>
                          </div>
                          <ContentComment className="text-blue-900 line-clamp-2 ">{obj.message}</ContentComment>
                          <div className="flex items-center">
                            {' '}
                            <button
                              className="bg-red-400 px-2 py-1 text-sm rounded-md  text-white"
                              onClick={() => {
                                if (feedBack && parentId === obj._id) {
                                  setFeedBack(!feedBack);
                                } else {
                                  setFeedBack(true);
                                }
                                setParentId(obj._id);
                              }}
                            >
                              {feedBack && parentId === obj._id ? 'Huỷ trả lời' : 'Trả Lời'}
                            </button>
                            {obj.countFeedback !== 0 ? (
                              <button
                                className="ml-5 text-sm text-gray-600 flex items-center"
                                onClick={() => {
                                  setParentId(obj._id);
                                  setShowFeedBack(!showFeedback);
                                }}
                              >
                                {obj.countFeedback} phản hồi{' '}
                                {parentId === obj._id && showFeedback ? (
                                  <BsChevronUp className="ml-1" />
                                ) : (
                                  <BsChevronDown className="ml-1" />
                                )}
                              </button>
                            ) : (
                              <></>
                            )}
                          </div>
                        </DetailComment>
                      </ItemComment>
                      <div className="ml-16">
                        {listFeedback.data &&
                          parentId === obj._id &&
                          showFeedback &&
                          listFeedback.data.map((item: any, index: number) => (
                            <ItemComment
                              className="!bg-slate-200  shadow-md !grid !grid-cols-12 items-center"
                              key={item._id}
                            >
                              <ImageCommon
                                src={
                                  item.user?.avatarId
                                    ? `${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${item.user?.avatarId?.url}`
                                    : '/images/admin.jpg'
                                }
                                alt="Ảnh người dùng"
                                width={500}
                                height={500}
                                className="col-span-2"
                              />
                              <DetailComment className="col-span-10 flex flex-col">
                                <div>
                                  <span>{item.user?.fullName || 'Admin'}</span>
                                  <span>
                                    {(() => {
                                      const createdAt = item.createdAt ? new Date(item.createdAt) : new Date();
                                      createdAt.setUTCHours(createdAt.getUTCHours() + 7); // Thêm 7 giờ để chuyển đổi múi giờ
                                      const options = { timeZone: 'UTC' };
                                      const localDateTime = createdAt.toLocaleString('en-US', options);
                                      return localDateTime;
                                    })()}
                                  </span>
                                </div>
                                <ContentComment className="text-blue-900 line-clamp-2 ">{item.message}</ContentComment>
                              </DetailComment>
                            </ItemComment>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center mt-24 text-2xl"> Chưa có bình luận nào về sản phẩm !</div>
              )}
            </ListComment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
