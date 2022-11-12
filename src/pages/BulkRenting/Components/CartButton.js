import { addCart } from 'Context/slice/CarSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function CartButton(props) {
  const {carInfo} = props
const dispatch = useDispatch()

  return (<button 
    className="absolute 
    right-2 w-[10%] h-[50px] text-white bg-gradient-to-r from-blue-500
     via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:ring-4
      hover:ring-blue-300 flex items-center justify-center px-2 py-1 
      text-center font-medium focus:z-10 rounded-md" 
      type='button' onClick={e=>dispatch(addCart(carInfo))}>
        <i className="fa-solid fa-cart-shopping" />
        </button>
  )
}
