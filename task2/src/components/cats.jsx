import React, {useState, useEffect} from 'react'
import useFavStore from '../store/favStore';
import './cats.css'

const Cat = () => {
    const [cats, setCats] = useState([]);
    const addFavCat = useFavStore((state) => state.addFav)

    const url = `https://api.thecatapi.com/v1/images/search?limit=50&api_key=live_B6995jpTHhBX4tlpo77UXJS8eqsFI8q0ZX2rWMgzSW0bPpRcQwBaq8owjlicVQpE&has_breeds=true`;


    useEffect( () => {
        const fetchCat = async () =>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error("No response :( ");
                }

                const data = await response.json();
                return data;
            } catch(error){
                console.error("Fetching error", error);
                document.write("<br> api isn't working :( " )
            }
        };
        fetchCat(url).then(data => setCats(data));
    }, []);

    
    const favHandler = (cat) =>{
        addFavCat( cat );
        console.log("fav added!");
    }

    return (
        <div>
            <div className='cats_container'>
                {cats.map( (cat) => (
                    <div className='cat_pic' key={cat.id}>
                        <img src={cat.url} alt='cat not loading :('/>
                        <div className='cat_name'> 
                            {cat.breeds[0].name}
                            
                        </div>
                        <button
                          style={{backgroundColor:'#FFFFFF', border:'none'}}
                          onClick={() => {favHandler(cat)}}>
                            <i className="fa-regular fa-heart fa-xl heart_icon" style={{color: "#ff8080"}}></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    
    
     );
}
 
export default Cat;