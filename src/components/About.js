import React, { useContext } from 'react'
const notesContext = React.createContext();

export default function About() {
  const context = useContext(notesContext);

  return (
    <div className='container'>
        Name of the Prop : {context.name}
    </div>
  )
}
