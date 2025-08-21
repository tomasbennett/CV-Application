import { PersonalDetailsForm } from './components/cv-editing/components/PersonalDetails'

import "./App.css"
import { CV } from './components/cv-layout/components/CVContainer'
import { useState } from 'react'
import { IPersonalDetails } from './models/FormData'

const originalFormData: IPersonalDetails = {
  fullName: "Tomas Bennett",
  email: "tjs.bennett@gmail.com",
  phone: "0778887787",
  address: "None of your business, London, UK SW1A 1AA"
};

function App() {
  const [curr, setState]: [IPersonalDetails, (curr: IPersonalDetails) => void] = useState<IPersonalDetails>(originalFormData);

  return (
    <>
      <CV curr={curr} />
      <PersonalDetailsForm curr={curr} setState={setState} />
    </>
  )
}

export default App
