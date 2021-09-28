import React from 'react'
import Team from '~/components/Team'
import MiniFooter from '~/components/Footer/MiniFooter';
import MetaData from '~/components/MetaData';
import Header from "../components/Header";

export default function team() {
    return (
        <>
        <MetaData title="Haal | Team" />
        <div className='w-screen bg-gray-50'>
          <Header />
          <Team />
          <MiniFooter/>
        </div>
      </>
    )
}
