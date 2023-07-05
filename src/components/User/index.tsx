import React, { useEffect, useState } from 'react';
import { useListUser } from './services/hook/useListUser';
import { LoadingCenter } from '../Loading';
import { AiFillDelete } from 'react-icons/ai';
import DataTable from 'react-data-table-component';
import { TbLock, TbLockOpen } from 'react-icons/tb';
import useLockOrUnLock from './services/hook/useLockOrUnLockUser';
import Notification from '../Notification';
import { Gender } from '@/graphql/generated';
import ModalConfirm from '../ModalConfirm';
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
  const { handleLockOrUnLock } = useLockOrUnLock();
  const [isOpen, setIsOpen] = useState<any>(false);
  const [prop, setProp] = useState<any>({});
  const [id, setId] = useState<any>();
  const columns = [
    { name: 'ID', selector: (row: any) => row._id },

    { name: 'Tên Người Dùng', selector: (row: any) => row.fullName, sortable: true },
    { name: 'Số Điện Thoại', selector: (row: any) => row.phoneNumber, sortable: true },
    // { name: 'Email', selector: (row: any) => row?.email, sortable: true },
    { name: 'Nhà cung cấp', selector: (row: any) => row.provider, sortable: true },
    {
      name: 'Giới Tính',
      selector: (row: any) => (
        <>{row.gender === Gender.Female ? 'NỮ' : row.gender === Gender.Male ? 'NAM' : 'KHÔNG XÁC ĐỊNH'} </>
      ),
      sortable: true
    },
    // { name: 'Địa Chỉ', selector: (row: any) => row.address, sortable: true },
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
          {row.active ? (
            <button
              onClick={() => {
                setId(row._id);
                setIsOpen(true);
                setProp({
                  title: 'XÁC NHẬN',
                  content: 'Bạn có chắc chắn khoá người dùng này?'
                });
              }}
            >
              <TbLockOpen className=" text-2xl text-green-700 hover:bg-orange-200" />
            </button>
          ) : (
            <button
              onClick={() => {
                setId(row._id);
                setIsOpen(true);
                setProp({
                  title: 'XÁC NHẬN',
                  content: 'Bạn có chắc chắn mở khoá người dùng này?'
                });
              }}
            >
              <TbLock className=" text-2xl text-orange-700 hover:bg-orange-200" />
            </button>
          )}
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

  const submitLockOrUnLock = () => {
    setIsOpen(false);
    handleLockOrUnLock({ id });
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isLoading ? (
        <LoadingCenter />
      ) : (
        <>
          {' '}
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
          <ModalConfirm isOpen={isOpen} onOk={submitLockOrUnLock} onCancel={handleClose} prop={prop} />
        </>
      )}
    </>
  );
};

export default User;
