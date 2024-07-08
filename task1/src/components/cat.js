import './cat.css'
import React, {useState, useEffect} from 'react';


//const url2 = 'https://api.thecatapi.com/v1/images/search?limit=20&has_breed=1'
//const api_key = "live_B6995jpTHhBX4tlpo77UXJS8eqsFI8q0ZX2rWMgzSW0bPpRcQwBaq8owjlicV"


function Cat({type}){
    const [cats, setCats] = useState([]);
    const url = `https://api.thecatapi.com/v1/images/search?limit=99&api_key=live_B6995jpTHhBX4tlpo77UXJS8eqsFI8q0ZX2rWMgzSW0bPpRcQwBaq8owjlicVQpE&breed_ids=${type}`;

    useEffect(()=>{
        const fetchCat = async () =>{
            try{
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error("No response");
                }

                const data = await response.json();
                return data;
            } catch(error) {
                console.error("Fetch error", error);
            }
            
        };
        fetchCat(url).then(data => setCats(data));
    }, [type]);


    return (
    <div>
        <div className='catsContainer'>
            {cats.map((cat) => (
                <div className='catItem' key={cat.id}>
                    <img src={cat.url} alt="Cat"/>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Cat;
