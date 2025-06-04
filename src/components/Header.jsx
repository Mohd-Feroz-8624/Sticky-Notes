import { NewNote } from './NewNote'
import { useState } from 'react'
import './header.css'
export function Header() {
  const [token, setToken] = useState(true)
  return (
    <>
      <div className="header">
        <h2 className='notes' onClick={()=>{
          setToken(true)
        }}>Notes</h2>
        <div >
          {
            token
              ?
              <div className='search-container'>
                <input type="text" className="search" placeholder="Search Notes.." />

                <img src="src/assets/searchIcon.png" alt="" className='icon'
                  onClick={() => {

                  }} />
              </div>
              : <div></div>
          }
        </div>
        <div onClick={() => {
          setToken(false)
          NewNote();
        }}>
          {
            token
              ? <p className='create-button'>Create Note </p>
              : <div></div>
          }
        </div>
      </div>
      <hr />
      {
        token
          ? <div></div>
          : <NewNote />
      }
    </>
  )
}