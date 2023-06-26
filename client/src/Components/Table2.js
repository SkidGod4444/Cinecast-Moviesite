import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { DateFormater, ShortUppercaseId } from './Notifications/EmptyN';

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = ({ data, users, OnEditFunc, OnDeleteFunction }) => {
  return (
    <tr>
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
              <img
                className='h-full w-full object-cover'
                src={data?.image ? data.image : '/images/userdp.jpg'}
                alt={data?.username}
              />
            </div>
          </td>
          <td className={`${Text}`}>{data?._id ? ShortUppercaseId(data?._id) : '2rewsg67'}</td>
          <td className={`${Text}`}>{DateFormater(data?.createdAt)}</td>
          <td className={`${Text}`}>{data?.username}</td>
          <td className={`${Text}`}>{data?.email}</td>
          <td className={`${Text}`}>{data?.isAdmin ? 'Admin' : 'User'}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            {
              !data?.isAdmin && (
                <button 
                onClick={() => OnDeleteFunction(data?._id)}
                className='bg-subMain text-white rounded flex items-center justify-center w-8 h-8'>
              <MdDeleteForever className='w-6 h-6' />
            </button>
              )
            }
          </td>
        </>
      ) : (
        <>
          <td className={`${Text} font-bold`}>220976ASRDEB</td>
          <td className={`${Text}`}>{data?.createAt ? data.createAt : '12, jan 2023'}</td>
          <td className={`${Text}`}>{data.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button
              onClick={() => OnEditFunc(data)}
              className='border hover:border-subMain border-border bg-dry flex-rows gap-2 text-border hover:text-white rounded py-1 px-2'
            >
              Edit <FaEdit />
            </button>
            <button className='bg-subMain text-white rounded flex items-center justify-center w-8 h-8'>
              <MdDeleteForever className='w-6 h-6' />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

function Table2({ data, users, OnEditFunc, OnDeleteFunction }) {
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
      <table className='w-full table-auto border border-border divide-y divide-border hover:border-subMain'>
        <thead>
          <tr className='bg-dryGray'>
            {users ? (
              <>
                <th scope='col' className={`${Head}`}>
                  Image
                </th>
                <th scope='col' className={`${Head}`}>
                  Id
                </th>
                <th scope='col' className={`${Head}`}>
                  Date
                </th>
                <th scope='col' className={`${Head}`}>
                  Username
                </th>
                <th scope='col' className={`${Head}`}>
                  Email
                </th>
                <th scope='col' className={`${Head}`}>
                  Role
                </th>
              </>
            ) : (
              <>
                <th scope='col' className={`${Head}`}>
                  Id
                </th>
                <th scope='col' className={`${Head}`}>
                  Date
                </th>
                <th scope='col' className={`${Head}`}>
                  Title
                </th>
              </>
            )}
            <th scope='col' className={`${Head} text-end`}>
              Manage
            </th>
          </tr>
        </thead>
        <tbody className='bg-main divide-y divide-gray-800'>
          {data.map((data, i) => (
            <Rows
              key={i}
              data={data}
              users={users}
              OnEditFunc={OnEditFunc}
              OnDeleteFunction={OnDeleteFunction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
