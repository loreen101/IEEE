"use client";
import SearchBar from "../searchBar";
import Cats from "../cats"
import {useState} from 'react';


export default function Home() {
    const [search, setSearch] = useState('');

    return(
        <main>
            <SearchBar setSearch ={setSearch}/>
            <Cats type={search}/>
        </main>
    );
};
