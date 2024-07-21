import React from 'react'
import Cat from './cats';
import SearchBar from './searchBar';

import { useState } from 'react';

const Home = () => {

    const [search, setSearch] = useState('');

    return ( 
        <>
        <SearchBar/>
        <Cat />
        </>
     );
}
 
export default Home;