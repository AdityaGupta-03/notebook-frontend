import React, { useContext, useEffect, useRef } from 'react'
import notesContext from '../context/Notes/NotesContext'
import NoteItem from './NoteItem';
import Modal from './Modal';

const Notes = () => {
    const context = useContext(notesContext);

    // Just like ComponentDidMount
    useEffect(() => {
        context.getNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container my-3">
            <Modal />
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
