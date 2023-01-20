import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import { CiApple, AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ci";

const NavBar = ({ cart, addToCart, removeToCart, clearCart, subTotal }) => {

  console.log(cart, addToCart, removeToCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {

      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const ref = useRef()
  return (
    <div className='flex flex-col items-center shadow-xl justify-center md:flex-row md:justify-start sticky top-0 bg-white z-10'>
      <div className=' mb-[20px] mx-5'>
        <Link href='/'> <Image className=' rounded-[10px] mt-[20px] m' src='/code1.jpg' alt='' width={200} height={40} /></Link>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-4 font-bold'>
          <Link href={'/tshirts'}>  <li>TShirts</li></Link>
          <Link href={'/hoodies'}>    <li>Hoodies</li> </Link>
          <Link href={'/stickers'}>   <li>Stickers</li> </Link>
          <Link href={'/mugs'}>   <li>Mugs</li> </Link>
        </ul>
      </div>
      <div className='flex cart absolute right-0 mx-5 top-0'>
        <Link href={'/login'}>   < MdAccountCircle /></Link>
        <button onClick={toggleCart} ><CiApple /></button>
      </div>
      <div ref={ref} className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 py-10 transform transition-transform  ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}   px-8`}>
        <h2 className=' text-center font-bold text-xl'>Shopping Cart </h2>
        <div onClick={toggleCart} className='absolute top-2 right-2'>
          <button> <CiApple /></button>
        </div>
        <ol className='list-decimal font-semibold'>

          {Object.keys(cart).length == 0 && <div className='my-4'>no items in the cart </div>}
          {Object.keys(cart).length !== 0 && Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className='item flex my-5'>
                <div className='w-2/3 font-semibold'>{cart[k].name} </div>
                <div className='mx-3 space-x-2 w-2/3 font-semibold'>{cart[k].size} </div>
                <div className='w-2/3 font-semibold'>{cart[k].variant} </div>

                <div className='flex items-center justify-center
               w-1/3 '>
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
            </li>
          })}



        </ol>
        <div className='flex space-x-2 items-center '>
          <Link href='/checkout'> <button class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Checkout</button></Link>
          <button onClick={clearCart} class="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Clear</button>
        </div>
      </div>
    </div >
  )
}

export default NavBar