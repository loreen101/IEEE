"use client";
import './searchBar.css';
import TextField from '@mui/material/TextField'; 
import { useRouter } from 'next/navigation';


export default function SearchBar(props) {
    const router = useRouter();

    const goToFav = () => {
        router.push("/components/favTab"); 
    }

    const handleInput = e => {
        const text = e.target.value;
        props.setSearch(text);
        
    }

    return ( 
        <>
            <div className='searchBar_div'>
                <div className="search-field">
                    <TextField 
                    id="outlined-basic" 
                    onChange={handleInput}
                    label="Search your cat (birm, abys..)" 
                    variant="outlined" 
                    fullWidth/> 
                </div>
                
                <button 
                className='fav-button' 
                style={{backgroundColor:'#FFFFFF', border:'none'}}
                onClick= {goToFav}> 
                    <i className="fa-solid fa-heart fa-2xl" style={{color: "#ff8080"}}></i>
                </button>
            </div>
        </>
     );
};
