import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";



export default function CarlistContainer(props) {
    
    const carArrList = useSelector(state => state.carState.carlist);

    return (<div className='h-full col-span-1  '>
        <div className='h-full w-full border shadow-xl flex flex-col  justify-start '>
            <div className=' h-[15%] w-full flex justify-center items-center  shadow-md'>Car List</div>
            <div className="w-full h-[500px]  overflow-y-scroll scrollbar-hide">
                {carArrList ? carArrList.map((item, index) => <ItemCard key={index} carInfo={item} status={'car'}/>) : <div className="w-full h-full flex justify-center items-center ">LOADING</div>}
            </div>
        </div>

    </div>)
}
