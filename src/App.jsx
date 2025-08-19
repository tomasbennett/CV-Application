import { memo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { PersonalDetailsForm } from './features/cv-editing/components/PersonalDetails.tsx'

import "./App.css"
import { CV } from './features/cv-layout/components/CVContainer'


function App() {

  return (
    <>
      <CV />
      <PersonalDetailsForm />

    </>
  )
}

export default App
