import React from 'react'
import Header from '~/components/Header'
import AddCustomerForm from '~/components/AddCustomerForm'
import MetaData from '~/components/MetaData'

export default function Customers({ valid }: any) {
  console.log(valid)
  if (!valid) {
    return (
      <div className="h-screen px-3 my-12 flex items-center justify-center">
        Not a valid shop
      </div>
    )
  }

  return (
    <>
      <MetaData title="Add Customers | haal.in" />
      <div className="w-screen">
        <Header />
        <AddCustomerForm />
      </div>
    </>
  )
}
