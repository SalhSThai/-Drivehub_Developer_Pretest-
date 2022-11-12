import React from 'react'
import AddButton from './AddButton'
import CartButton from './CartButton'

export default function ItemCard(props) {
    const { carInfo = {} ,status} = props
    return (<div className='relative md:h-[20%] lg:h-[150px]  w-full border-b-[1px] flex justify-start items-center p-2'>
        <div className="h-full aspect-video bg-black bg-cover " style={{ backgroundImage: `url(${carInfo.fields?.photo})` }}></div>
        <div className="h-full grow flex flex-col pl-5">
            <div className="w-full h-[50%] flex  items-center ">{carInfo.fields?.title}</div>
            <div className="w-full h-[50%] flex items-center ">{carInfo.fields?.price}/Day</div>
        </div>
        {status==='car'?<CartButton carInfo={carInfo}/>:
        <AddButton carInfo={carInfo}/>}
    </div>

    )
}
