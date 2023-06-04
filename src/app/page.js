"use client"

import React from 'react'
import CharacterCounter from './CharacterCounter'
import { RecoilRoot } from 'recoil'




const page = () => {
  return (
  <RecoilRoot>
    <CharacterCounter />
  </RecoilRoot>
  )
}

export default page
