import React, { useContext, useEffect, useState } from 'react'
import notesContext from '../context/Notes/NotesContext'
import NoteItem from './NoteItem';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(notesContext);
    const [selectedNote, setSelectedNote] = useState({ id: "", title: "", tag: "", desc: "" });
    const navigate = useNavigate();
    // Just like ComponentDidMount
    useEffect(() => {
        if (localStorage.getItem("token")) {
            context.getNotes();
        }
        // eslint-disable-next-line
        else {
            navigate("/login");
        }
    }, []);

    return (
        <div className="container my-3">
            <Modal note={selectedNote} setNote={setSelectedNote} showAlert={props.showAlert} />
            <h2>Your Notes</h2>
            {context.notes.length === 0 && "No notes to display"}
            <div className="row">
                {context.notes.map((note) => {
                    return <NoteItem note={note} key={note._id} setSelectedNote={setSelectedNote} showAlert={props.showAlert} />
                })}
            </div>
        </div>
    )
}

export default Notes
