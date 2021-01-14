import React, { useState } from 'react'

function SearchBlock( { getSearch }) {

    const [ searchValue , setValue ] = useState("");

    const hanelInput = (q) => {
        setValue(q)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ( searchValue.trim().length > 0) {
            getSearch(searchValue);
        }else {
            alert('please fill in the field');
        }
    }

    return (
        <div className="Search">
            <form onSubmit={ handleSubmit }>
                <input 
                      type="text" 
                      value={searchValue}  
                      placeholder="search for movies..."
                      onChange={(e) => hanelInput(e.target.value) } 
                />
            </form>
        </div>
    )
}

export default SearchBlock
