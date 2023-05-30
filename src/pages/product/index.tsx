import Product from '@/components/Product';
import useUserStore, { UserStore } from '@/store/useUserStore';
import React from 'react';

const ProductPage = () => {
  const { user } = useUserStore(store => store) as UserStore;

  return (
    <div className="flex flex-col">
      <div className="m-10 text-amber-600 font-bold">
        <h1>DANH SÁCH SẢN PHẨM</h1>
      </div>
      {user ? <Product /> : <></>}
    </div>
  );
};

export default ProductPage;
