import { useEffect, useState } from 'react';
import './myNotes.css';

export function MyNotes() {
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  // Load notes from localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Delete note by index
  const handleDelete = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  // Start editing a note
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedTitle(notes[index].title);
    setEditedContent(notes[index].content);
  };

  // Save the edited note
  const handleSaveEdit = () => {
    const updatedNotes = [...notes];
    updatedNotes[editingIndex] = {
      ...updatedNotes[editingIndex],
      title: editedTitle,
      content: editedContent,
    };
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setEditingIndex(null);
    setEditedTitle("");
    setEditedContent("");
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedTitle("");
    setEditedContent("");
  };

  return (
    
    <div className="content">
      {notes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        notes.map((note, index) => (
          <div key={index} className="note-card">
            {editingIndex === index ? (
              <>
                <div className='edit-title'>

                  <span>title</span>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                </div>
                <div className='edit-title'>

                  <span>Note</span>
                  <textarea
                  className='edit-Note'
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  ></textarea>
                </div>
                <div className="buttons">
                  <button className="save" onClick={handleSaveEdit}>Save</button>
                  <button className="cancel" onClick={handleCancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p className="title">{note.title}</p>
                <p className="note">{note.content}</p>
                <div className="buttons">
                  <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}
