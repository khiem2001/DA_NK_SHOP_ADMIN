import AddProduct from '@/components/Product/components/AddProduct';
import useUserStore, { UserStore } from '@/store/useUserStore';
import React from 'react';

const ProductAddPage = () => {
  const { user } = useUserStore(store => store) as UserStore;

  return (
    <div>
      <div className="m-10 text-amber-600 font-bold">
        <h1>THÊM SẢN PHẨM ĐỒ GIA DỤNG</h1>
      </div>
      {user ? <AddProduct /> : <></>}
    </div>
  );
};

export default ProductAddPage;
