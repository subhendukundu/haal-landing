import React from 'react'
import MiniFooter from '~/components/Footer/MiniFooter'
import Header from '~/components/Header'
import JoinOurTeam from '~/components/joinOurTeam'
import MetaData from '~/components/MetaData'

export default function joinOurTeam() {
    return (
        <>
            <MetaData title="Haal | Simplify business tasks" />
            <div className='w-screen bg-gray-50'>
                <Header />
                <JoinOurTeam />
                <MiniFooter />
            </div>
        </>
    )
}
