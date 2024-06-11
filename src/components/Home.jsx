import React from 'react'

export default function Home() {
  return (
    <>
      <div className='container my-3'>
        <h2>Add your Note</h2>
        <form>
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" aria-describedby="emailHelp" name='title'/>
          </div>
          <div class="mb-3">
            <label for="desc" class="form-label">Description</label>
            <textarea class="form-control" id="desc" rows="3" name='desc'></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
      </div>
    </>

  )
}
