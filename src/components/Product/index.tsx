import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useListProduct } from './services/hook/useListProduct';
import Link from 'next/link';
import { RiAddLine } from 'react-icons/ri';
import Image from 'next/image';
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
const Product = () => {
  const { listProduct, isLoading } = useListProduct({
    pagination: {
      limit: 1000,
      page: 1
    }
  });

  const columns = [
    { name: 'ID', selector: (row: any) => row._id },
    {
      name: 'Hình ảnh',
      cell: (row: any) => (
        <Image src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}${row.image.url}`} alt="" width={70} height={90} />
      )
    },
    { name: 'Tên Sản Phẩm', selector: (row: any) => row.name, sortable: true },
    {
      name: 'Ngày Cập Nhật',
      selector: (row: any) => {
        const updatedAt = new Date(row.updatedAt);
        const options = { timeZone: 'UTC' };
        updatedAt.setUTCHours(updatedAt.getUTCHours() + 7); // Thêm 7 giờ để chuyển đổi múi giờ
        const localDateTime = updatedAt.toLocaleString('en-US', options);
        return localDateTime;
      },
      sortable: true
    },
    {
      name: 'Ngày Tạo',
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
      name: 'Tác Vụ',
      cell: (row: any) => (
        <div>
          <button className="mr-5" onClick={() => handleEdit(row)}>
            <AiFillEdit className="edit-icon" />
          </button>
          <button onClick={() => handleDelete(row)}>
            <AiFillDelete className="edit-icon" />
          </button>
        </div>
      )
    }
  ];

  const [records, setRecords] = useState(listProduct.products);
  useEffect(() => {
    setRecords(listProduct.products);
  }, [isLoading]);
  const handleFilter = (e: any) => {
    const newData = listProduct?.products?.filter(row =>
      row.name?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  const handleEdit = (row: any) => {
    // Xử lý sự kiện chỉnh sửa
    console.log('Chỉnh sửa bản ghi:', row);
  };

  const handleDelete = (row: any) => {
    // Xử lý sự kiện xóa
    console.log('Xóa bản ghi:', row);
  };

  return (
    <div>
      <div className="flex justify-between mb-10">
        <input className="py-4 px-4 w-2/4 outline-none" type="text" placeholder="Tìm kiếm..." onChange={handleFilter} />
        <Link
          href="/product/add"
          className=" flex px-4 py-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          <RiAddLine className="mr-2 m-auto" />
          <span>Thêm sản phẩm</span>
        </Link>
      </div>
      {isLoading ? (
        <>Loading...</>
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

export default Product;
