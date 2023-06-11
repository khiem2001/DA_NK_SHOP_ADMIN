import React, { useEffect, useState } from 'react';
import { useListUser } from './services/hook/useListUser';
import { LoadingCenter } from '../Loading';
import { AiFillDelete } from 'react-icons/ai';
import DataTable from 'react-data-table-component';
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
const User = () => {
  const { listUser, isLoading } = useListUser();

  const columns = [
    { name: 'ID', selector: (row: any) => row._id },

    { name: 'Tên Người Dùng', selector: (row: any) => row.fullName, sortable: true },
    { name: 'Số Điện Thoại', selector: (row: any) => row.phoneNumber, sortable: true },
    { name: 'Email', selector: (row: any) => row?.email, sortable: true },
    { name: 'Nhà cung cấp', selector: (row: any) => row.provider, sortable: true },
    { name: 'Giới Tính', selector: (row: any) => row.gender, sortable: true },
    { name: 'Địa Chỉ', selector: (row: any) => row.address, sortable: true },
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
          <button onClick={() => handleDelete(row)}>
            <AiFillDelete className="edit-icon" />
          </button>
        </div>
      )
    }
  ];
  const [records, setRecords] = useState(listUser);
  useEffect(() => {
    setRecords(listUser);
  }, [isLoading, listUser]);
  const handleFilter = (e: any) => {
    const newData = listUser?.filter(
      row =>
        row.fullName?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.phoneNumber?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        row.email?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
  };
  const handleDelete = (row: any) => {
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xoá bản ghi này?');
    if (confirmDelete) {
    }
  };
  return (
    <>
      {isLoading ? (
        <LoadingCenter />
      ) : (
        <div>
          <input
            className="py-4 px-4 w-2/4 outline-none mb-5"
            type="text"
            placeholder="Tìm kiếm..."
            onChange={handleFilter}
          />
          <DataTable
            columns={columns}
            data={records || []}
            pagination
            striped
            customStyles={customStyles}
            responsive
            highlightOnHover
          />
        </div>
      )}
    </>
  );
};

export default User;
