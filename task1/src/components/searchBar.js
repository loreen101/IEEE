import React, { useState, useEffect } from 'react';



function SearchBar(props) {
    

    const handleInput = e => {
        const text = e.target.value;
        props.setSearch(text);
    }




    return (
        <div>
            <div>
                <input
                className='search_input'
                onChange={handleInput}
                type='text'
                placeholder='Search you cat...'
                ></input>
            </div>
            
        </div>
    )
}

export default SearchBar;
