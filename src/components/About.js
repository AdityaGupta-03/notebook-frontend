import React, { useContext } from 'react'

export default function About() {
  const context = useContext("../context/Notes/NotesContext");

  return (
    <div className='container'>
      Name of the Prop : {context.name}
    </div>
  )
}
