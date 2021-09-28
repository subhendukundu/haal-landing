import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import MiniFooter from '~/components/Footer/MiniFooter'
import Header from '~/components/Header'
import MetaData from '~/components/MetaData'
import Member from '~/components/Member'

export default function member() {

    const location: any = useLocation()
    const history: any = useHistory()
    const [member, setMember]: any = useState('')

    useEffect(() => {
        location.state
            ? setMember(location.state.member)
            : history.push('/team')
    }, [location])



    return (
        <>
            <MetaData title="Haal | Simplify business tasks" />
            <div className='w-screen bg-gray-50'>
                <Header />
                <Member
                    member={member}
                />
                <MiniFooter />
            </div>
        </>
    )
}
