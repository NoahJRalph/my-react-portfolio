import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import ProfilePic from './components/ProfilePic';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <main>
        {/*Profile Pic*/}
        <ProfilePic/>
        {/*Title Text Box*/}
        <Header/>
        {/*Center Page Content*/}
        <Router>
          <Routes>
            <Route path="my-react-portfolio/home" element={<Home/>}/>
            <Route path="my-react-portfolio/" element={<Home/>}/>
          </Routes>
        </Router>
        {/*Contact Me Box*/}
        <Footer/>
        {/*Background Video*/}
        <Background/>
    </main>
  );
}
export default App;