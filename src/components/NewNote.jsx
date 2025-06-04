import { useState } from "react";
import './newNote.css'
import { HomePage } from "./HomePage";
import { MyNotes } from "./MyNotes";

export function NewNote() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    const existingItems = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = {
      title: title.trim(),
      content: note.trim(),
      createdAt: new Date().toISOString()
    }
    const updatedNotes = [...existingItems, newNote]
    localStorage.setItem('notes', JSON.stringify(updatedNotes));


  }
  // console.log(title)
  return (
    <div className="container">
      <div className="main">
        <h2>new note</h2>
        <label>
          <span>Title</span>
          <input type="text" className="text" value={title} placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)

          }
          />
        </label>
        <label>
          <span>Note</span>
          <textarea name="" id="Note" value={note} onChange={(e) => {
            setNote(e.target.value)
          }}></textarea>
        </label>
        <a href="/display" className="save-text" onClick={handleSubmit}>Save</a>

      </div>
    </div>
  )
}