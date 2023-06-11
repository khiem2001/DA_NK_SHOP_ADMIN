import ProductType from '@/components/Product/components/TypeProduct';
import useUserStore, { UserStore } from '@/store/useUserStore';
import { useRouter } from 'next/router';
import React from 'react';

const ProductTypePage = () => {
  const { user } = useUserStore(store => store) as UserStore;
  const router = useRouter();
  return (
    <div>
      <div className="m-10 text-amber-600 font-bold flex justify-between">
        <h1>THÊM Loại SẢN PHẨM</h1>
        <button className="bg-orange-400 p-2 text-white" onClick={() => router.push('/product/add')}>
          Quay trở lại
        </button>
      </div>
      {user ? <ProductType /> : <></>}
    </div>
  );
};

export default ProductTypePage;
