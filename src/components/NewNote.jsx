import './newNote.css'
export function NewNote() {
  return (
    <div className='container-Body'>
      <div className="container">
        <h2>Create New Note</h2>
        <br />
        <label className='fieldset'>
          <span className='title'>
            Title
          </span>
          <input type="text" name="" id="title" className='note' />
        </label>
        <div className='fieldset' >
          <span className='title'>
             Note
          </span>
          <textarea name="" id="" className='content note' />
        </div>
        <button className='save-btn'>Save</button>
      </div>
    </div>
  )
}