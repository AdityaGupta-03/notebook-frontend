import React, { useContext } from 'react'
import NotesContext from '../context/Notes/NotesContext';

export default function About() {
  const context = useContext(NotesContext);

  return (
    <div className='container'>
      Name of the Prop : {context.name}
    </div>
  )
}
