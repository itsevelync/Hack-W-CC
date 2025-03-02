import { Link } from "react-router-dom";
import Scroll from '../assets/Scroll.png';
import Feather from '../assets/Feather.png';

function Navbar() {

    return (
        <>
            <div className="w-[1000px] max-width-[90%] flex justify-between items-center gap-10 flex-wrap mx-auto my-5">
                <Link to="/about" className="flex flex-col content-center">
                    <img className="w-[50px] mx-auto" src={Scroll} />
                    About Us
                </Link>
                <Link to="/about" className="flex content-center justify-center h-min">
                    <h1 className="text-2xl">MESSAGE IN A BOTTLE</h1>
                </Link>
                <Link to="/submit" className="flex flex-col content-center">
                    <img className="w-[50px] mx-auto" src={Feather} />
                    Send a Bottle
                </Link>
            </div>
        </>
    )
}

export default Navbar