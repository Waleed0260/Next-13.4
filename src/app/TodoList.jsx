'use client'
import React, {useState} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { TodoState } from './TodoState'
import { todoSelector } from './TodoSelector';
import Todo from './Todo';

function TodoList() {

    const[todos, setTodos] = useRecoilState(TodoState);
    const[value, setValue] = useState("")

    function addTodo(){
        setTodos((prevTodo)=>[...prevTodo, {id:Math.random(), text: value}])
        setValue("")
    }

    console.log({todos})


    function removeTodo(){
        setTodos([])
    }

    const todolength = useRecoilValue(todoSelector)

  return (
    <div>
      <input type="text" name="text" id="" value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button onClick={addTodo}>Add todo</button>
      <button onClick={removeTodo}>remove todo</button>
      {todos.map((todo)=>{
        return <Todo key={todo.id} text={todo.text} id={todo.id}/>
      })}
      <h4>todolength: {todolength}</h4>
    </div>
  )
}

export default TodoList
