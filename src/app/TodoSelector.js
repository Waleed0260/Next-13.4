import { selector } from "recoil";
import { TodoState } from "./TodoState";

export const todoSelector = selector({
    key: 'todoSelector',
    get: ({get})=>{
        const todo = get(TodoState);
        return todo.length
    }
})
