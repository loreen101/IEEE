"use client";
import './favTab.css';
import useFavStore from '@/store/favStore';

export default function FavTab() {
    const favss = useFavStore((state) => state.favs);

    return ( 
        <div>
            <center style={{marginTop:'40px', fontSize:'24px'}}> Favourite cats  </center>
            <div className='fav_container'>
                {Object.values(favss).map((fav) => (
                    <div className='fav_cat_pic' key={fav.id}>
                    <img className='fav_img' src={fav.url}/>
                    <ul>
                        <li> Name : {fav.breeds[0].name}</li>
                        <li> ID : {fav.breeds[0].id} </li>
                        <li> Country of origin : {fav.breeds[0].origin} </li>
                        <li> Description : {fav.breeds[0].description} </li>
                    </ul>
                    <i className="fa-solid fa-heart fa-xl heart_iconF" style={{color: "#ff8080"}}></i>
                </div>
                    
                    
                ))}
            </div>
        </div>
    );
};
