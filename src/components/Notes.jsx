import React, { useContext, useEffect, useRef } from 'react'
import notesContext from '../context/Notes/NotesContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(notesContext);

    // Just like ComponentDidMount
    useEffect(() => {
        context.getNotes();
        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const updateNote = (note) => {
        ref.current.click();
    }

    return (
        <div className="container my-3">
            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Modal</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="title" className="col-form-label">Title:</label>
                                    <input type="text" className="form-control" id="title" />
                                </div>
                                <div className="mb-3">
                                    <label for="tag" className="col-form-label">Tag:</label>
                                    <input type="text" className="form-control" id="tag" />
                                </div>
                                <div className="mb-3">
                                    <label for="desc" className="col-form-label">Description:</label>
                                    <textarea className="form-control" id="desc"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Your Notes</h2>
            <div className="row">
                {context.notes.map((note) => {
                    return <NoteItem note={note} updateNote={updateNote} key={note._id} />
                })}
            </div>
        </div>
    )
}

export default Notes
