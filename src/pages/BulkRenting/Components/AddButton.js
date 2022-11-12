import { addCart, subCart } from 'Context/slice/CarSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

export default function AddButton({carInfo}) {
    const dispatch = useDispatch();
    const Btn = styled.div`
    height:100% ;
    aspect-ratio: 1 / 1;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:1px;
    `

    return (<div className='absolute right-2 h-[50px] flex justify-between items-center p-3 '>
        <Btn className='cursor-pointer' onClick={e=>dispatch(subCart(carInfo))}>-</Btn>
        <Btn className='select-none'>{carInfo?.fields?.amount}</Btn>
        <Btn className='cursor-pointer' onClick={e=>dispatch(addCart(carInfo))}>+</Btn>
    </div>
      )
}
