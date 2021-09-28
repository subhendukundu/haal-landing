import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostLoader from '~/components/PostLoader'
import { apiUrl } from '~/constants'

export default function AddCustomerForm() {
  const { id } = useParams() as any
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const otpRef = useRef<HTMLInputElement>(null)
  const [phone, setPhone] = useState('')
  const [success, setSuccess] = useState(false)
  const [exists, setExists] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [confirmOtpDetails, setConfirmOtpDetails] = useState<any>(null)
  console.log(id)

  function onPhoneNumberChange(e: any) {
    const telephone = e.target.value
    console.log(telephone)
    if (telephone === '' || /^[0-9\b]+$/.test(telephone)) {
      setPhone(e.target.value)
    }
  }

  async function onPhoneSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault()
    const { value: first_name = '' } = firstNameRef?.current || {}
    const { value: last_name = '' } = lastNameRef?.current || {}
    if (first_name && phone) {
      const object = {
        phone,
        first_name,
        last_name,
      }
      try {
        setLoading(true)
        console.log(object)
        const resData = await fetch(`${apiUrl}/v1/shop/customer/send`, {
          method: 'post',
          body: JSON.stringify({ phone, countryCode: '+91', shopId: id }),
        })
        const res = await resData.json()
        if (res.exists) {
          setExists(true)
        } else {
          setConfirmOtpDetails(object)
        }
      } catch (e) {
        console.log(e)
        setError('There was an error! Please try again')
      } finally {
        setLoading(false)
      }
    }
  }

  async function onOTPResend(e: React.FormEvent<EventTarget>) {
    e.preventDefault()
    try {
      setLoading(true)
      const resData = await fetch(`${apiUrl}/v1/shop/customer/send`, {
        method: 'post',
        body: JSON.stringify({ phone, countryCode: '+91', shopId: id }),
      })
      const res = await resData.json()
      if (res.exists) {
        setExists(true)
      }
    } catch (e) {
      console.log(e)
      setError('There was an error! Please try again')
    } finally {
      setLoading(false)
    }
  }

  async function confirmCustomer(e: React.FormEvent<EventTarget>) {
    e.preventDefault()
    const { value: otp = '' } = otpRef?.current || {}
    if (otp) {
      try {
        setLoading(true)
        await fetch(`${apiUrl}/v1/shop/customer/verify`, {
          method: 'post',
          body: JSON.stringify({
            phone,
            countryCode: '+91',
            otp,
            id,
            ...confirmOtpDetails,
          }),
        })
        setSuccess(true)
      } catch (e) {
        console.log(e)
        setError('There was an error! Please try again')
      } finally {
        setLoading(false)
      }
    }
  }

  if (loading) {
    return (
      <div className="h-screen px-3 my-12 flex items-center justify-center">
        <PostLoader />
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-screen px-3 my-12 flex items-center justify-center">
        {error}
      </div>
    )
  }

  if (exists) {
    return (
      <div className="h-screen px-3 my-12 flex items-center justify-center">
        You already have an account with {phone}!
      </div>
    )
  }

  if (success) {
    return (
      <div className="h-screen px-3 my-12 flex items-center justify-center">
        Thank you!
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center px-3 mt-25">
        <div className="w-full flex justify-center">
          <div className="w-full bg-white p-5 rounded-lg max-w-sm">
            <h3 className="pt-4 text-2xl text-center">
              {confirmOtpDetails ? 'OTP Verification' : 'Create an Account!'}
            </h3>
            {confirmOtpDetails && (
              <div className="flex flex-col mt-4 items-center">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">{confirmOtpDetails.phone}</span>
              </div>
            )}
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              {confirmOtpDetails ? (
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    OTP
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="otp"
                    type="text"
                    placeholder="11111"
                    ref={otpRef}
                    maxLength={5}
                    required
                  />
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <div className="mb-4">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        ref={firstNameRef}
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        ref={lastNameRef}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Phone
                    </label>
                    <div className="flex items-center text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                      <span className="px-3">+91</span>
                      <input
                        className="w-full px-3 py-2"
                        id="phone"
                        type="text"
                        placeholder="9999999999"
                        minLength={10}
                        maxLength={10}
                        onChange={onPhoneNumberChange}
                        value={phone}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="mb-8 mt-8 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={confirmOtpDetails ? confirmCustomer : onPhoneSubmit}
                >
                  {confirmOtpDetails ? 'Confirm OTP' : 'Register Account'}
                </button>
              </div>
              {confirmOtpDetails && (
                <div className="flex justify-center text-center mt-5">
                  <button
                    className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"
                    onClick={onOTPResend}
                  >
                    <span className="font-bold">Resend OTP</span>
                    <i className="bx bx-caret-right ml-1"></i>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
