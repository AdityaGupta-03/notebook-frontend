import React, { useContext, useEffect } from 'react'
import NotesContext from '../context/Notes/NotesContext';

export default function About() {
  const context = useContext(NotesContext);

  useEffect(() => {
    context.updateAge();
    context.updateName();
  }, []);

  return (
    <div className='container'>
      Name of the Prop : {context.state.name} and age is: {context.state.age}
    </div>
  )
}
