import React, { useContext } from 'react'
import notesContext from '../context/Notes/NotesContext';

const NoteItem = (props) => {
    const context = useContext(notesContext)
    const onDelete = () => {
        context.deleteNote(props.note._id);
    }

    const onEdit = (e) => {
        e.preventDefault();
        context.editNote(props.note._id);
    }

    return (
        <>
            <div className="card col-md-3 my-3 mx-3">
                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.note.tag}</h6>
                    <p className="card-text">{props.note.description}</p>
                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter"> <i className="fa-solid fa-pen-to-square"></i> Edit </button>
                    <button type="button" className="btn btn-danger mx-3" onClick={onDelete}> <i className="fa-solid fa-trash"></i> Delete </button>
                </div>
            </div>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Edit this Note</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="title" class="col-form-label">Title:</label>
                                    <input type="text" class="form-control" id="title" />
                                </div>
                                <div class="form-group">
                                    <label for="tag" class="col-form-label">Tag:</label>
                                    <input type="text" class="form-control" id="tag" />
                                </div>
                                <div class="form-group">
                                    <label for="description" class="col-form-label">Description:</label>
                                    <textarea class="form-control" id="description"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={onEdit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NoteItem;
