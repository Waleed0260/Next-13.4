"use client"

import React from 'react'
// import CharacterCounter from './CharacterCounter'
import { RecoilRoot } from 'recoil'
import TodoList from './TodoList'




const page = () => {
  return (
  <RecoilRoot>
    <TodoList/>
  </RecoilRoot>
  )
}

export default page
