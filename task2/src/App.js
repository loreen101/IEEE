import './App.css';
import Cat from './components/cats';
import Header from './components/header';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import FavTab from './components/favTab';


function App() {
  return (
    <Router>
      <Header/>
      <div>
        
        <Routes>
          <Route path="/" element={<Navigate to="/home.jsx" replace />} />
          <Route path="/home.jsx" element={<Home/>} />
          <Route path="/aboutUs.jsx" element={<AboutUs/>} />
          <Route path="/contactUs.jsx" element={<ContactUs/>} />
          <Route path='/favTab.jsx' element={<FavTab/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
