import { fetchCart, setGrandTotalRedux } from "Context/slice/CarSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import SummaryBlock from "./SummaryBlock";

export default function CartlistContainer(props) {
    const cartArrList = useSelector(state => state.carState.cart);
    const {total,discount} = useSelector(state => state.carState);

    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(fetchCart())
    }, [])
    useEffect(() => {
    
        if(total-discount>0) {dispatch(setGrandTotalRedux(total-discount??0))}

    }, [discount,total])
    

    return (<div className='h-full col-span-1  '>
        <div className='relative h-full w-full border shadow-xl flex flex-col justify-start'>
            <div className='h-[15%] w-full flex justify-center items-center shadow-md'>Cart</div>
            <div className="w-full h-[500px]  overflow-y-scroll scrollbar-hide">
                {cartArrList.length ? cartArrList.map((item, index) => <ItemCard key={index} carInfo={item} status={'cart'} />) : <div className="w-full h-full flex justify-center items-center ">LOADING</div>}
            </div>
            <div className=' absolute bottom-0 h-[150px] w-full bg-[rgba(255,255,255,0.9)]  border-t-[1px] border-black'>
                <SummaryBlock index='0'></SummaryBlock>
                <SummaryBlock index='1'></SummaryBlock>
                <SummaryBlock index='2'></SummaryBlock>
            </div>

        </div>
    </div>)
}
