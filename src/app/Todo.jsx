"use client"
import React from 'react'
import { useSetRecoilState } from 'recoil'
import { TodoState } from './TodoState'

function Todo({text, id}) {
    const setTodo = useSetRecoilState(TodoState)

    function deleteTodo() {
        setTodo((prevTodos)=> {
            return prevTodos.filter((todo)=> todo.id !== id)
        })
    }


  return (
    <div>
      <p>{text}</p>
      <button onClick={deleteTodo}>X</button>
    </div>
  )
}

export default Todo
