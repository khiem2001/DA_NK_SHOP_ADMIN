import Messager from '@/components/Messager';
import React from 'react';

const MessagerPage = () => {
  return (
    <div>
      <div className="m-10 text-amber-600 font-bold">
        <h1>TIN NHẮN CỦA KHÁCH HÀNG</h1>
        <Messager />
      </div>
    </div>
  );
};

export default MessagerPage;
