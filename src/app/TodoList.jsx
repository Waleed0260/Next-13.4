import { useRecoilValue, atom } from "recoil";

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
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </>
    );
  }

  export default TodoList;