import React from 'react'
import About from '~/components/About';
import MiniFooter from '~/components/Footer/MiniFooter';
import MetaData from '~/components/MetaData';
import Header from "../components/Header";

export default function about() {
    return (
        <>
        <MetaData title="Haal | About Us" />
        <div className='w-screen bg-gray-100'>
          <Header />
          <About />
          <MiniFooter/>
        </div>
      </>
    )
}
