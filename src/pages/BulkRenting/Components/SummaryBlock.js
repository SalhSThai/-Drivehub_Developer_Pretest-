import { setDiscountRedux } from 'Context/slice/CarSlice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

export default function SummaryBlock(props) {
    const carState = useSelector(state=>state.carState)
    const title = {0:'Total',1:'Discount',2:'Grand Total'}
    const price = {0:carState.total,1:carState.discount,2:carState.grandTotal}
    const [coupon,setCoupon] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state)
useEffect(() => {
    const index = carState.discountCoupon.findIndex(i=>i===coupon)
    if(index >=0 ){
        dispatch(setDiscountRedux(carState.discountObj.items[index].fields.amount))
  }
}, [coupon])

    const DisBtn = styled.input`
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid black;
    `
    return (
        <div className='h-[33%] w-full shadow-md flex justify-between items-center px-5 py-1 '>
            <div className='select-none'>{title[props.index]}</div>
            {props.index==='1'?<input type='text' className='h-full w-[150px]  border border-black rounded-[10px] text-center' placeholder='Discount Coupon' onChange={e=>setCoupon(e.target.value)}/>:null}
            <div className='select-none'>{price[props.index]} THB</div>
        </div>
    )
}
