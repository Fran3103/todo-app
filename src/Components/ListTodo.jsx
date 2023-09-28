import React, { useState } from 'react'
import Form from './Form'

import Tareas from './Tareas'

const ListTodo = () => {
  const [tareas, setTareas] = useState([])

  const agregartarea = todo => {
    if (todo.texto.trim()) {
      todo.texto = todo.texto.trim()
      const tareaActualizada = [todo, ...tareas]
      setTareas(tareaActualizada)
    }
  }

  const todoDelete = id => {
    const tareaActualizada = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareaActualizada)
  }
  const completada = id => {
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.complete = !tarea.complete
      }
      return tarea
    })
    setTareas(tareaActualizada)
  }

  return (
    <>
      <Form Tareanueva={agregartarea} />
      <div className='w-full p-6 flex flex-col justify-start items-start gap-1 bg-VeryLightGrayishBlue h-screen  '>
        {
        tareas.map((tarea) =>
          <Tareas
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            complete={tarea.complete}
            completada={completada}
            todoDelete={todoDelete}
          />)
      }
      </div>
    </>
  )
}

export default ListTodo
