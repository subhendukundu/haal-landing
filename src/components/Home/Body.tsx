import React from 'react'

import Customers from './Customers';
import GetIt from './GetIt'
import HaalIsAwesome from './HaalIsAwesome';
import WithHaal from './WithHaal';


export default function Body({ setModal } : any) {
    return <>
        <GetIt />
        <WithHaal />
        <HaalIsAwesome setModal={setModal} />
        <Customers />
    </>
}
