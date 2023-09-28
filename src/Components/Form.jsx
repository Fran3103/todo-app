import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Form (props) {
  const [input, setInput] = useState('')

  const change = e => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: uuidv4(),
      texto: input,
      complete: false
    }
    e.target.todo.value = ''
    // eslint-disable-next-line react/prop-types
    props.Tareanueva(newTodo)
  }

  return (
    <div className='w-full px-7 m-auto -mt-16 '>
      <form className='w-full m-auto flex justify-center items-center' onSubmit={handleSubmit}>
        <input type='text' name='todo' className='w-full h-12 px-5 rounded-md shadow-xl bg-VeryLightGray dark:bg-VeryDarkGrayish_Blue text-VeryDarkGrayishBlue' placeholder='Create a new todo ' onChange={change} />
      </form>
    </div>
  )
}

export default Form
