import React from 'react'
import Link from 'next/link'
import { CiApple } from "react-icons/ci";

const Checkout = ({ subTotal, cart, clearCart, removeToCart, addToCart }) => {
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-xl  my-8 text-cen'>Checkout</h1>
      <h2 className='text-xl font-bold'>1. Delivery Details</h2>
      <div className='mx-auto flex ' >
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-bas" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input type="name" id="name" name="name" className="w-full bg-gray-100 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-bas" />
          </div>
        </div>
      </div>
      <div className='mx-auto flex ' >
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-400">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-gray-100 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-bas" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-400">State</label>
            <input type="city" id="city" name="city" className="w-full bg-gray-100 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-bas" />
          </div>
        </div>
      </div>
      <div className='mx-auto flex ' >
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-400">State</label>
            <input type="text" id="state" name="state" className="w-full bg-gray-100 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-bas" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div class=" mb-4">
            <label htmlFor="pincode" className="leading-7 text-sm text-gray-400">PinCode</label>
            <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-bas" />
          </div>
        </div>
      </div>
      <div className='px-2 w-full'>
        <div class=" mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-400">Address</label>
          <textarea type="address" id="address" cols='5' rows='2' name="address" className="w-full bg-gray-100 rounded border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-900 text-bas" />
        </div>
      </div>
      <h2 className='text-xl font-bold'>2. Review Cart Items</h2>
      <div className=' sideCart bg-pink-100 p-6 m-2'>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length == 0 && <div className='my-4'>no items in the cart </div>}
          {Object.keys(cart).length !== 0 && Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3 font-semibold'>{cart[k].name} </div>
                <div className='mx-3 space-x-2 w-2/3 font-semibold'>{cart[k].size} </div>
                <div className='w-2/3 font-semibold'>{cart[k].variant} </div>
                <div className='flex items-center justify-center  w-1/3 '>
                  < CiApple
                    onClick={() => {
                      removeToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)
                    }}
                  />
                  {cart[k].qty}
                  < CiApple
                    onClick={() => {
                      addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)
                    }} />
                </div>
              </div>
              <span>
                SubTotal:{subTotal}
              </span>
            </li>
          })}
        </ol>
      </div>
      <Link href='/checkout'> <button class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Pay ${subTotal}</button></Link>
    </div >
  )
}

export default Checkout