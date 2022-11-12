import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (<div className="w-screen h-screen flex flex-col ">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
    )
}
export default MainLayout