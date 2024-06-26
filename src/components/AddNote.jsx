import React, { useContext, useState } from 'react'
import notesContext from '../context/Notes/NotesContext'

const AddNote = (props) => {
    const context = useContext(notesContext);

    const [note, setNote] = useState({title: "", tag: "", desc: "" });

    const onChange = (e)=>{
        setNote({...note , [e.target.name]: e.target.value});
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        context.addNote(note.title,note.desc,note.tag);
        setNote({title: "", tag: "", desc: "" });
        props.showAlert("Note has been added", "success");
    }

    return (
        <div className='container my-3'>
            <h2>Add your Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="Title" name='title' value={note.title} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" aria-describedby="Tag" name='tag' value={note.tag} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="form-control" id="desc" rows="3" name='desc' value={note.desc} onChange={onChange}></textarea>
                </div>
                <button disabled={note.title.length<3 || note.desc.length<5} type="submit" className="btn btn-primary" onClick={onSubmit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
