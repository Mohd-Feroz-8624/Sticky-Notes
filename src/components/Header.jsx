
import './header.css'
export function Header() {

  return (
    <>
      <div className="header">
        <h2 className='notes'>Notes</h2>
        <div className='search-container'>

          <input type="text" className="search" placeholder="Search Notes.." />

          <img src="src/assets/searchIcon.png" alt="" className='icon'
            onClick={() => {

            }} />

        </div>
        <div className='create-button'onClick={()=>{
          
        }}>

          <p>Create  Note </p>
        </div>
      </div>
      <hr />
    </>
  )
}