import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Redsect from "../components/Red-sect/Redsect"
import Footer from "../components/Footer/Footer"

function Home() {
       return (
              <>
              <Nav/>
              <Header/>
              <Redsect/>
              <Footer/>
              </>
       );
}

export default Home;