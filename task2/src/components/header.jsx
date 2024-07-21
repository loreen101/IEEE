import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


const Header = () => {
    return ( 
        <>
        <div className='header'>
            <div className='name'>
                <i className="fa-solid fa-cat fa-2xl m-2 " style={{color: "#000000"}}></i>
                <span style={{fontSize:'24px'}}> BsBs </span>
            </div>

            <div className='tabs' >
                <Link to="/home.jsx" style={{color:'black'}}> Home </Link>
                <Link to="/aboutUs.jsx" style={{color:'black'}}> About us</Link>
                <Link to="/contactUs.jsx" style={{color:'black'}}> Contact Us </Link>
            </div>    
        </div>
        

        <div className='line'/>
        </>
     );
}
 
export default Header;