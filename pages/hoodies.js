import Link from 'next/link'
import React from 'react'
import mongoose from "mongoose";
import Product from '../models/Product';
// import connectDb from '../middleware/mongoose';
const Hoodies = ({ products }) => {
  return (
    <div><section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 justify-center">
          {Object.keys(products).length === 0 &&
            <p>Sorry all the hoodies are not available</p>
          }
          {Object.keys(products).map((item) => {

            return < Link key={item._id} href={`/product/${products[item].slug}`}>
              <div className='w-full md:w1/2 p-4'>
                <img alt="ecommerce" class="m-auto md:m-0 h-[30vh] md:h-[36vh] block" src={products[item].img} />
                <div class="mt-4">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <p class="mt-1">${products[item].price}</p>

                  <p className=" mt-1">{products[item].size.includes('s') && <span className='border border-gray-600 px-1 mx-1' >S</span>}</p>
                  <p className=" mt-1">{products[item].size.includes('m') && <span className='border border-gray-600 px-1 mx-1'>M</span>}</p>
                  <p className=" mt-1">{products[item].size.includes('xl') && <span className=' border border-gray-600 px-1 mx-1'>L</span>}</p>
                  <p className=" mt-1">{products[item].size.includes('XXL') && <span className='border border-gray-600 px-1 mx-1'>XXL</span>}</p>

                  <p className=" mt-1">{products[item].color.includes('green') &&
                    <button className="border-2 border-green-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  }
                  </p>
                  <p className=" mt-1">{products[item].color.includes('blue') &&
                    <button className="border-2 border-blue-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  }
                  </p>
                  <p className=" mt-1">{products[item].color.includes('red') &&
                    <button className="border-2 border-red-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  }
                  </p>
                  <p className=" mt-1">{products[item].color.includes('black') &&
                    <button className="border-2 border-black-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  }
                  </p>


                </div>
              </div>
            </Link>
          })}
        </div >
      </div >
    </section ></div >
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)

  }

  let products = await Product.find({ category: "hoods" })
  console.log(products)
  let hoods = {}
  for (let item of products) {
    if (item.title in hoods) {
      if (!hoods[item.title].color.includes(item.color) &&
        item.avalaibilQty > 0) {
        hoods[item.title].color.push(item.color)
      }
      if (!hoods[item.title].size.includes(item.size) &&
        item.avalaibilQty > 0) {
        hoods[item.title].size.push(item.size)
      }
    }
    else {
      hoods[item.title] = JSON.parse(JSON.stringify(item))
      if (item.avalaibilQty > 0) {
        hoods[item.title].color = [item.color]
        hoods[item.title].size = [item.size]

      }
    }
  }
  console.log(hoods)
  return {
    props: { products: JSON.parse(JSON.stringify(hoods)) }, // will be passed to the page component as props
  }
}


export default Hoodies