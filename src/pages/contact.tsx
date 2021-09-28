import React from 'react'
import Contact from '~/components/Contact';
import MiniFooter from '~/components/Footer/MiniFooter';
import MetaData from '~/components/MetaData';
import Header from "../components/Header";

export default function contact() {
    return (
        <>
        <MetaData title="Haal | Contact Us" />
        <div className='w-screen bg-gray-50'>
          <Header />
          <Contact />
          <MiniFooter/>
        </div>
      </>
    )
}
