import { PersonalDetailsForm } from './components/cv-editing/components/PersonalDetails'

import "./App.css"
import { CVMemo } from './components/cv-layout/components/CVContainer'
import { useState } from 'react'
import { IPersonalDetails } from './models/FormData'
import { CVHeaderContext } from './context/CVHeaderContext'

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
      <CVHeaderContext.Provider value={ curr }>
        <CVMemo />
      </CVHeaderContext.Provider>

      <PersonalDetailsForm { ...{curr, setState } } isOpenInitial={"open"}  />
    </>
  )
}

export default App
