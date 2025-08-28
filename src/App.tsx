import "./App.css"
import { CVLayoutMemo } from './components/cv-layout'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { IFormData } from './models/FormData'
import { CVHeaderContext } from './context/CVHeaderContext'
import { EditForms } from './components/cv-editing'
import { defaultEditFormData, defaultPersonalFormData } from './constants'

//ERROR: WHENEVER A CHANGE HAS BEEN MADE IN ONE INPUT, MAKING A CHANGE IN ANOTHER INPUT RESETS THE ORIGNAL INPUT

function App() {
  const [curr, setState]: [IFormData, Dispatch<SetStateAction<IFormData>>]  = useState<IFormData>(defaultEditFormData);

  const value = useMemo(() => ({ curr, setState }), [curr]);

  return (
    <>
      <CVHeaderContext.Provider value={ value }>

        <CVLayoutMemo />
        <EditForms />

      </CVHeaderContext.Provider>

    </>
  )
}

export default App
