"use client"
// import CharacterCounter from './CharacterCounter'
// import { RecoilRoot } from 'recoil'
// import TodoList from './TodoList'
import { Provider } from "react-redux"
import store from "../redux/store"
import { Counter } from "./Counter"

const page = ()=>{
return(
<>
   {/* <RecoilRoot>
   <TodoList/>
   </RecoilRoot>  */}
   <Provider store={store}>
    <Counter/>
   </Provider>
</>
)
}
export default page

{/* 
// import React, {useEffect} from 'react'
// import axios from 'axios'


// const books = [
//   { name: "John", age: 25 },
//   { name: "Sarah", age: 32 },
//   { name: "David", age: 28 },
//   { name: "Emma", age: 23 },
// ];

// books.sort((a, b) => b.age - a.age);

// const weekdays = ["Tuesday", "Thursday", "Monday", "Wednesday", "Friday"];

// weekdays.sort((a, b) => {
//   const order = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//   return order.indexOf(a) - order.indexOf(b);
// });

// console.log(weekdays);

// const numbers = [5, 7, 6, 2, 6, 9];

// const uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers);
// uniqueNumbers.sort((a,b)=> a - b)

// const students = [
//   { name: "charlie", grade: 85 },
//   { name: "Bob", grade: 92 },
//   { name: "alice", grade: 76 },
//   { name: "David", grade: 92 },
//   { name: "David", grade: 88 },

// ];

// students.sort((a, b) => {
//   return b.grade - a.grade
// });

// const arr =[5, 6, 2, 8, 4, ]
// const hhh = arr.sort((a,b)=> a - b)
// const sec = hhh[4]

// let arr = [1,2,3,4,5]
// const val = arr.unshift(6)


const page = () => {

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> 
    console.log(res.data)
    )
  }, [])

  return (
    <>
    <h1>{students.map((item)=>{
      return(
        <div key={item.grade}>
          <p>{item.name}</p>
          <p>{item.grade}</p>
        </div>
      )
    })}</h1> 
    <h1>{val}</h1>
    <h1>{arr}</h1>
    
    </>
  )
}
*/}
