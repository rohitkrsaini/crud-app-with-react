import React from 'react'
import { useNavigate } from 'react-router-dom';

const DataCard = ({info, handleDelete}) => {
  const navigate = useNavigate();
  const {id, name, email} = info;
  return (
    <div className="flex gap-4 flex-col border border-gray-300 rounded-2xl p-4 ">
        <div className='flex-grow h-30'> 

        
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b>{email}</p>
        </div>
        <div className='h-24 flex gap-4 items-center justify-between my-2'>
            <button className="p-2 text-white rounded bg-blue-500" onClick={()=>{navigate(`/edit/${id}`)}}>Edit</button>
            <button className="p-2 text-white rounded bg-red-500" onClick={()=>handleDelete(id)}>Delete</button>
        </div>

    </div>
  )
}

export default DataCard