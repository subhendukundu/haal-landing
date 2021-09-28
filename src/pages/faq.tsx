import React from 'react'
import FAQ from '~/components/FAQ';
import MiniFooter from '~/components/Footer/MiniFooter';
import MetaData from '~/components/MetaData';
import Header from "../components/Header";

export default function faq() {
    return (
        <>
        <MetaData title="Haal | FAQ" />
        <div className='w-screen bg-gray-50'>
          <Header />
          <FAQ />
          <MiniFooter/>
        </div>
      </>
    )
}
