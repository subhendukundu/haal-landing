import React from 'react'
import Header from "../components/Header";
import Body from "../components/Home/Body";
import MetaData from '~/components/MetaData';
import Footer from '~/components/Footer';

export default function Home({ message }: any) {
  return (
    <>
      <MetaData title="Haal | Simplify business tasks" />
      <div className='w-screen bg-gray-50'>
        <Header />
        <Body />
        <Footer/>
      </div>
    </>
  )
}
