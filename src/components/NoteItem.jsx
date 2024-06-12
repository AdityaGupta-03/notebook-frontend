import React, { useContext } from 'react'
import notesContext from '../context/Notes/NotesContext';

const NoteItem = (props) => {
    const context = useContext(notesContext)
    const onDelete = () => {
        context.deleteNote(props.note._id);
    }
    const onEdit = () => {
        context.editNote();
    }

    return (
        <div className="card col-md-3 my-3 mx-3">
            <div className="card-body">
                <h5 className="card-title">{props.note.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.note.tag}</h6>
                <p className="card-text">{props.note.description}</p>
                <button type="button" className="btn btn-dark" onClick={onEdit}> <i className="fa-solid fa-pen-to-square"></i> Edit </button>
                <button type="button" className="btn btn-danger mx-3" onClick={onDelete}> <i className="fa-solid fa-trash"></i> Delete </button>
            </div>
        </div>
    )
}

export default NoteItem;
