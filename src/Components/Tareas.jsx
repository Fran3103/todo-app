/* eslint-disable react/prop-types */
import React from 'react'
import iconDelete from '../assets/icon-cross.svg'
import iconCheck from '../assets/icon-check.svg'

const Tarea = (props) => {
  const { id, texto, complete, todoDelete, completada } = props
  return (
    <div className={complete ? 'bg-VeryLightGray line-through p-3 flex justify-between w-full items-start first:rounded-t' : 'bg-VeryLightGray last:rounded-b p-3 flex justify-between w-full items-start first:rounded-t'}>
     <div className={complete ? 'bg-blue-500 w-6 h-6 p-2 rounded-full' : 'bg-transparent border w-6 h-6 p-2 rounded-full'} onClick={() => completada(id)}>
        <img src={iconCheck} alt='iconCheck' />
      </div>
      <p className='text-DarkGrayishBlue'>{texto}</p>
      <div>
        <img src={iconDelete} alt='iconDelete' className='w-3 h-3' onClick={() => todoDelete(id)} />
      </div>
    </div>
  )
}

export default Tarea
