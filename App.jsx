import React from 'react'
import Header from './src/Components/Header'

import ListTodo from './src/Components/ListTodo'

const App = () => {
  return (
    <div className='dark:bg-VeryDarkDesaturatedBlue  bg-VeryLightGray max-w-[1220px] m-auto h-screen '>

      <Header />
      <ListTodo />
    </div>
  )
}

export default App
