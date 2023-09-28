import React, { useState } from 'react'
import Form from './Form'

import Tareas from './Tareas'

const ListTodo = () => {
  const [allTareas, setAllTareas] = useState()
  const [activas, setActivas] = useState([])
  const [tareas, setTareas] = useState(activas)

  const agregartarea = todo => {
    if (todo.texto.trim()) {
      todo.texto = todo.texto.trim()
      const tareaActualizada = [todo, ...tareas]
      setTareas(tareaActualizada)
      setAllTareas(tareaActualizada)
    }
  }

  const todoDelete = id => {
    const tareaActualizada = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareaActualizada)
    setAllTareas(tareaActualizada)
  }
  const completada = id => {
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.complete = !tarea.complete
      }
      return tarea
    })
    setTareas(tareaActualizada)
    setAllTareas(tareaActualizada)
  }

  const Active = () => {
    const tareasActivas = tareas.filter(tarea => tarea.complete === false)
    setTareas(tareasActivas)
    setActivas(...tareasActivas)
  }

  const Completed = () => {
    const tareasCompletadas = tareas.filter(tareas => tareas.complete !== false)
    setTareas(tareasCompletadas)
  }

  const ClearCompleted = () => {
    const TareasCompletadas = tareas.filter(tarea => tarea.complete === false)
    setTareas(TareasCompletadas)
    setAllTareas(TareasCompletadas)
  }

  const All = () => {
    const tareaActualizada = [...allTareas]
    setTareas(tareaActualizada)
  }
  return (
    <>
      <Form Tareanueva={agregartarea} />
      <div className='w-full p-6 flex flex-col justify-beetween items-start   bg-VeryLightGrayishBlue h-screen  '>
        {
        tareas.map((tarea) =>
          <Tareas
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            complete={tarea.complete}
            completada={completada}
            todoDelete={todoDelete}
            Active={Active}
            ClearCompleted={ClearCompleted}
          />)
      }
      <div className={tareas.length === 0 ? 'hidden' : 'bg-VeryLightGray  p-3 flex justify-between w-full items-center rounded-b  shadow-xl'} >
        <p>items left</p>
        <p onClick={ClearCompleted}>Clear Completed</p></div>
      <div className='bg-VeryLightGray  p-3 flex justify-between w-full items-center rounded mt-7 shadow-xl'>
        <p onClick={All}>All</p>
        <p onClick={Active}>Active</p>
        <p onClick={Completed}>Completed</p>
    </div>
      </div>
    </>
  )
}

export default ListTodo
