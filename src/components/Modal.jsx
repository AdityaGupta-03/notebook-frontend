import React, { useContext, useState } from 'react'
import notesContext from '../context/Notes/NotesContext';

function Modal(props) {
    const context = useContext(notesContext);

    const onChange = (e) => {
        props.setNote({ ...props.note, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        context.editNote(props.note.id, props.note.title, props.note.desc, props.note.tag);
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Modal</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="utitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="utitle" name="title" value={props.note.title} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="utag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="utag" name="tag" value={props.note.tag} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="udesc" className="form-label">Description</label>
                                    <textarea className="form-control" id="udesc" rows="3" name="desc" value={props.note.desc} onChange={onChange} ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Modal
