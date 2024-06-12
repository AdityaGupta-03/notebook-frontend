import React from 'react'
import Notes from './Notes';

export default function Home() {
  return (
    <>
      <div className='container my-3'>
        <h2>Add your Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" aria-describedby="emailHelp" name='title' />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <textarea className="form-control" id="desc" rows="3" name='desc'></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="container my-3">
        <Notes />
      </div>

    </>

  )
}
