import React, { useContext } from 'react'
import notesContext from '../context/Notes/NotesContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(notesContext);

    return (
        <div className="my-3">
            <h2>Your Notes</h2>
            <div className="row">
                {context.notes.map((note) => {
                    return <NoteItem note={note} key={note._id} />
                })}
            </div>

        </div>
    )
}

export default Notes
