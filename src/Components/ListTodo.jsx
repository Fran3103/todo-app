import React, { useState } from 'react'
import Form from './Form'
import Tareas from './Tareas'

const ListTodo = () => {
  const [allTareas, setAllTareas] = useState([])
  const [activas, setActivas] = useState([])
  const [tareas, setTareas] = useState(activas)
  const [contador, setContador] = useState(allTareas.filter(tarea => tarea.complete === false))

  const completada = id => {
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.complete = !tarea.complete
      }
      return tarea
    })

    setTareas(tareaActualizada)
    setAllTareas(tareaActualizada)
    setContador(tareaActualizada.filter(tarea => tarea.complete === false))
  }
  const agregartarea = todo => {
    if (todo.texto.trim()) {
      todo.texto = todo.texto.trim()
      const tareaActualizada = [todo, ...tareas]
      setTareas(tareaActualizada)
      setAllTareas(tareaActualizada)
      setContador(tareaActualizada.filter(tarea => tarea.complete === false))
    }
  }

  const todoDelete = id => {
    const tareaActualizada = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareaActualizada)
    setAllTareas(tareaActualizada)
    setContador(tareaActualizada.filter(tarea => tarea.complete === false))
  }

  const Active = () => {
    const tareasActivas = tareas.filter(tarea => tarea.complete === false)
    setTareas(tareasActivas)
    setActivas(...tareasActivas)
    setContador(tareasActivas)
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
      <div className='w-full p-6 flex flex-col justify-beetween items-start   bg-VeryLightGrayishBlue  '>
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
      <div className={tareas.length === 0 ? 'hidden' : 'bg-VeryLightGray md:hidden p-3 flex justify-between w-full items-center rounded-b  shadow-xl  dark:bg-VeryDarkGrayish_Blue dark:text-VeryLightGray '} >
        <p>items left {contador.length}</p>
        <p onClick={ClearCompleted} className='cursor-pointer '>Clear Completed</p></div>
      <div className='bg-VeryLightGray  p-3 flex justify-between w-full items-center rounded mt-7 shadow-xl  dark:bg-VeryDarkGrayish_Blue dark:text-VeryLightGray '>
      <p className='md:block hidden'>items left {contador.length}</p>
        <p onClick={All} className='cursor-pointer '>All</p>
        <p onClick={Active} className='cursor-pointer'>Active</p>
        <p onClick={Completed} className='cursor-pointer'>Completed</p>
        <p onClick={ClearCompleted} className='cursor-pointer md:block hidden '>Clear Completed</p>
    </div>
      </div>
      <div className='flex w-full justify-center items-center p-4 gap-3 text-center text-slate-700 dark:bg-VeryDarkGrayish_Blue dark:text-VeryLightGray '>
        <a href='https://github.com/Fran3103/todo-app.git' target='_Blank' rel='noreferrer noopener'>GitHub</a>
        <a href='https://www.linkedin.com/in/franco-aguirre-24855012a' target='_Blank' rel='noreferrer noopener'>Franco Aguirre</a>
      </div>
    </>
  )
}

export default ListTodo
