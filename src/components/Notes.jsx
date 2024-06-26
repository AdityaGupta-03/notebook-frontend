import React, { useContext, useEffect, useState} from 'react'
import notesContext from '../context/Notes/NotesContext'
import NoteItem from './NoteItem';
import Modal from './Modal';

const Notes = () => {
    const context = useContext(notesContext);
    const [selectedNote, setSelectedNote] = useState({ id: "", title: "", tag: "", desc: "" });

    // Just like ComponentDidMount
    useEffect(() => {
        context.getNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container my-3">
            <Modal note={selectedNote} setNote={setSelectedNote} />
            <h2>Your Notes</h2>
            {context.notes.length === 0 && "No notes to display"}
            <div className="row">
                {context.notes.map((note) => {
                    return <NoteItem note={note} key={note._id} setSelectedNote={setSelectedNote} />
                })}
            </div>
        </div>
    )
}

export default Notes
