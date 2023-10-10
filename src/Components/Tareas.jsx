/* eslint-disable react/prop-types */
import React from 'react'
import iconDelete from '../assets/icon-cross.svg'
import iconCheck from '../assets/icon-check.svg'

const Tarea = (props) => {
  const { id, texto, complete, todoDelete, completada } = props

  return (
    <>
    <div className={complete ? 'bg-VeryLightGray line-through last:rounded-b p-4 px-8 flex justify-between w-full items-center first:rounded-t shadow-xl dark:bg-VeryDarkGrayish_Blue' : 'bg-VeryLightGray px-8  last:rounded-b p-4 flex justify-between w-full items-center first:rounded-t shadow-xl dark:bg-VeryDarkGrayish_Blue'}>
     <div className={complete ? 'bg-blue-500 w-6 h-6 p-2 rounded-full flex items-center gap-12' : 'bg-transparent border w-6 h-6 p-2 rounded-full flex items-center gap-12'} onClick={() => completada(id)}>
        <img src={iconCheck} alt='iconCheck' />
        <p className='text-VeryDarkGrayishBlue dark:text-VeryLightGray '>{texto}</p>
      </div>
      <div>
        <img src={iconDelete} alt='iconDelete' className='w-3 h-3' onClick={() => todoDelete(id)} />
      </div>
    </div>
    <hr />
    </>
  )
}

export default Tarea
