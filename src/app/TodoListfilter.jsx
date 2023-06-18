"use client"
import React from 'react'
import { todoListFilterState } from './TodoState';
import { useRecoilState } from 'recoil';

function TodoListfilter() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
  
    const updateFilter = ({target: {value}}) => {
      setFilter(value);
    };
  
    return (
      <>
        Filter:
        <select value={filter} onChange={updateFilter}>
          <option value="Show All">All</option>
          <option value="Show Completed">Completed</option>
          <option value="Show Uncompleted">Uncompleted</option>
        </select>
      </>
    );
  }

export default TodoListfilter
