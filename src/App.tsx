import "./App.css"
import { CVLayoutMemo } from './components/cv-layout'
import { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { IFormData } from './models/FormData'
import { CVHeaderContext } from './context/CVDataContext'
import { EditForms } from './components/cv-editing'
import { defCVLayout, defaultEditFormData, defaultPersonalFormData } from './constants'
import { ILayoutData } from "./models/LayoutData"
import { LayoutContext } from "./context/CVLayoutContext"

//ERROR: WHENEVER A CHANGE HAS BEEN MADE IN ONE INPUT, MAKING A CHANGE IN ANOTHER INPUT RESETS THE ORIGNAL INPUT

function App() {
  const [curr, setState]: [IFormData, Dispatch<SetStateAction<IFormData>>] = useState<IFormData>(defaultEditFormData);
  const value = useMemo(() => ({ curr, setState }), [curr]);

  const [currLayout, setLayout] = useState<ILayoutData>(defCVLayout);
  const layoutValue = useMemo(() => ({ currLayout, setLayout }), [currLayout]);

  return (
    <>
      <LayoutContext.Provider value={layoutValue}>

        <CVHeaderContext.Provider value={value}>

          <CVLayoutMemo />
          <EditForms />

        </CVHeaderContext.Provider>
        
      </LayoutContext.Provider>

    </>
  )
}

export default App
