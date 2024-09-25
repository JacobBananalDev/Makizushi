import React,{ useState } from 'react';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <div className='flex flex-row'>
        <SideBar/>
        <h1>home page</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default App
