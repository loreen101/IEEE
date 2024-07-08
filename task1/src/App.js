import { useState } from 'react';
import './App.css';
import Cat from './components/cat';
import Header from './components/Header';
import SearchBar from './components/searchBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';


function App() {
  const [search, setSearch] = useState('');
  return (
    <Router>
      <div>
        <div>
          <Header/>
        </div>

        <div className='search_div'>
          <SearchBar setSearch={setSearch}/>
        </div>
        
        <div className='textH1'> 
          <center> <h1>Cat Images</h1> </center>
        </div>
        <Cat type={search}/>
      </div>
      <Routes>
        <Route path='/aboutUs' element={<AboutUs/>} />
      </Routes>
    </Router>

  );
}

export default App;
