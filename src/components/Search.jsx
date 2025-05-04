import React from 'react'

function Search() {
  return (
   <>
   <div className="search-container">
    <div>
    <input type="text" value="Is Notely free to use?"/>
    <i className="fas fa-search"></i>
    <input type="text" value="Can I edit or delete my notes later?"/>
    <i className="fas fa-search"></i>
    </div>
    <div>
    <input type="text" value="Can I earn rewards for uploading?"/>
    <i className="fas fa-search"></i>
    <input type="text" value="Can you upload multiple notes at the same time?"/>
    <i className="fas fa-search"></i>
    </div>
    <div>
    <input type="text" value="How do I search for notes by topic?"/>
    <i className="fas fa-search"></i>
    <input type="text" value="Is there away to use Notely offline?"/>
    <i className="fas fa-search"></i>
    </div>
    </div>
   </>
  )
}

export default Search