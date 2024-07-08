import React, {useState, useEffect} from "react";
import './Header.css'
import { AppBar, Typography, Toolbar, Tabs, Tab} from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import {Link} from 'react-router-dom';



const Header = () => {
    const [tabValue, setTabValue] = useState("");
    const [search, setSearch] = useState("");

    const handleChange = e => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        if(search !== ""){
            fetch(`https://api.thecatapi.com/v1/images/search?limit=99&api_key=live_B6995jpTHhBX4tlpo77UXJS8eqsFI8q0ZX2rWMgzSW0bPpRcQwBaq8owjlicVQpE&breed_ids=${search}`)
            .then(response => response.json())
            .then(data => console.log(data));
        }
    }, [search]);

    return (
        <React.Fragment>
            <AppBar sx={{overflow:'hidden'}}>
                <Toolbar style={{ background: '#063970', display:''}}>
                    <div className="toolbarDiv">
                        <PetsIcon style={{ marginTop:'4px'}}>
                        </PetsIcon>

                        <Typography style={{ fontSize:'24px', marginLeft:'7px'}}>
                            PsPs
                        </Typography>
                    </div>

                    <div className="tabs">
                        <Link to="/AboutUs" sx={{marginRight:'5px'}}> About Us</Link>
                        <Link to="/contactUs"> Contact Us</Link>
                        
                    </div>

                    
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;