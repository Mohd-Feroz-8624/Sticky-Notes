
import './header.css'
export function Header() {

  return (
    <>
      <div className="header">
        <a href="/" className='notes'>
          Notes
        </a>
        <div >
          <div className='search-container'>
            <input type="text" className="search" placeholder="Search Notes.." />
            <img src="src/assets/searchIcon.png" alt="" className='icon'
            />
          </div>


        </div>
        <div >
          <a href='/newNote' className='create-button'>Create Note </a>
        </div>
      </div>
      <hr />

    </>
  )
}