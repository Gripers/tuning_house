import React from 'react';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Redsect from "../components/Red-sect/Redsect"
import Footer from "../components/Footer/Footer"
import Sect1 from '../components/Sect-1/Sect1';
import Sect2 from '../components/Sect-2/Sect2';
import Sect3 from '../components/Sect-3/Sect3';

function Home() {
       return (
              <>
              <Nav/>
              <Header/>
              <Sect1/>
              <Sect2/>
              <Sect3/>
              <Redsect/>
              <Footer/>
              </>
       );
}

export default Home;