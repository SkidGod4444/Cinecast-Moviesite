import React from 'react'
import { FaEdit, FaCloudDownloadAlt, FaPlay } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { Link } from 'react-router-dom';


const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
  const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3"

  const Rows = (movie, i, onDeleteHandler, admin) => {
  
  return (
    <tr key={i} >
      <td className={`${Text}`}>
        <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
            <img className='h-full w-full object-cover' 
            src={movie?.poster ? movie.poster : '/images/userdp.jpg'}
            alt={movie?.name} />
          </div>
      </td>
      <td className={`${Text} truncate`}>{movie.name}</td>
      <td className={`${Text}`}>{movie.category}</td>
      <td className={`${Text}`}>{movie.language}</td>
      <td className={`${Text}`}>{movie.year}</td>
      <td className={`${Text}`}>{movie.agelimit}</td>
      <td className={`${Text}`}>{movie.time}Hrs</td>
      <td className={`${Text} float-right flex-rows gap-2`}>
      {
        admin ? (
          <>
          <Link to={`/movie/edit/${movie?._id}`} className='border hover:border-subMain border-border bg-dry flex-rows gap-2 text-border hover:text-white rounded py-1 px-2'>
            Edit <FaEdit />
          </Link>
          <Link to={`/movies/${movie?._id}`} className='bg-subMain border border-subMain text-white rounded flex items-center justify-center w-8 h-8'>
            <FaPlay/>
          </Link>
          <button 
onClick={() => onDeleteHandler(movie?._id)}
className='bg-subMain text-white rounded flex items-center justify-center w-8 h-8'>
  <MdDeleteForever className='w-6 h-6' />
</button>
          
          </>
        ) : (
          <>
          <button className='border hover:border-subMain border-border bg-dry flex-rows gap-2 text-border hover:text-white rounded py-1 px-2'>
            Download <FaCloudDownloadAlt className='text-green-500'/>
          </button>
          <Link to={`/movies/${movie?._id}`} className='bg-subMain border border-subMain text-white rounded flex items-center justify-center w-8 h-8'>
            <FaPlay/>
          </Link>
          <button className='bg-subMain text-white rounded flex items-center justify-center w-8 h-8'>
  <MdDeleteForever className='w-6 h-6' />
</button>
          </>
      )}
      </td>
    </tr>
  )
}
function Table({data,onDeleteHandler,admin}) {
  
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
      <table className='w-full table-auto border border-border divide-y divide-border hover:border-subMain'>
        <thead>
          <tr className='bg-dryGray'>
<th scope='col' className={`${Head}`}>
    Image
</th>
<th scope='col' className={`${Head}`}>
    Name
</th>
<th scope='col' className={`${Head}`}>
    Category
</th>
<th scope='col' className={`${Head}`}>
    Language
</th>
<th scope='col' className={`${Head}`}>
    Year
</th>
<th scope='col' className={`${Head}`}>
    limit
</th>
<th scope='col' className={`${Head}`}>
    Time
</th>
<th scope='col' className={`${Head} text-end`}>
    Manage
</th>
          </tr>
        </thead>
        <tbody className='bg-main divide-y divide-gray-800'>
          {data.map((movie, i) => Rows(movie, i,onDeleteHandler, admin))}
        </tbody>
      </table>
    </div>
  )
}

export default Table