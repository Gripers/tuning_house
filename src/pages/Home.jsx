import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Redsect from "../components/Red-sect/Redsect"
import Footer from "../components/Footer/Footer"
import Sect1 from '../components/Sect-1/Sect1';

function Home() {
       return (
              <>
              <Nav/>
              <Header/>
              <Sect1/>
              <Redsect/>
              <Footer/>
              </>
       );
}

export default Home;