import React from 'react'
import './searchBar.css'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const navigate = useNavigate();

    const goToFav = () =>{
        navigate('/favTab.jsx');
    };

    return ( 
        <>
            <div className='searchBar_div'>
                <div className="search-field">
                    <TextField 
                    id="outlined-basic" 
                    label="Search your cat..." 
                    variant="outlined" 
                    fullWidth/> 
                </div>
                
                <button 
                className='fav-button' 
                style={{backgroundColor:'#FFFFFF', border:'none'}}
                onClick= {goToFav}
                > 
                    <i className="fa-solid fa-heart fa-2xl" style={{color: "#ff8080"}}></i>
                </button>
            </div>
        </>
     );
}


 
export default SearchBar;