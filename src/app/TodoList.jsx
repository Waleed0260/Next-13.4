"use client"
import { useRecoilValue, atom } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

const todoListState = atom({
    key: 'TodoList',
    default: [],
  });

function TodoList() {
    const todoList = useRecoilValue(todoListState);
  
    return (
      <>
        {/* <TodoListStats /> */}
        {/* <TodoListFilters /> */}
        <TodoItemCreator />
        <h1>hello</h1>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }

  export default TodoList;