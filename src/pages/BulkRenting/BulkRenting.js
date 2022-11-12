import { thunkCarlist } from 'Context/slice/CarSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CarlistContainer from './Components/CarlistContainer'
import CartlistContainer from './Components/CartlistContainer'

export default function BulkRenting() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(thunkCarlist())
    
    }, [])
    
    
    return (
        <div className='w-full grow p-5' >
            <div className='text-4xl '>BULK RENTING</div>
            <div className='w-full h-full grid-col-dense columns-2 p-2'>
                <CarlistContainer />
                <CartlistContainer />

            </div>
        </div>
    )
}
