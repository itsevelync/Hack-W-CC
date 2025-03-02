import { Link } from "react-router-dom";
import Scroll from '../assets/Scroll.png';
import Feather from '../assets/Feather.png';

function Navbar() {

    return (
        <>
            <div className="w-[1000px] max-width-[90%] flex justify-between items-center gap-10 flex-wrap mx-auto my-5">
                <Link to="/about" className="flex flex-col content-center gap-2  text-lg">
                    <img className="h-[70px] mx-auto" src={Scroll} />
                    About Us
                </Link>
                <Link to="/" className="flex content-center justify-center h-min">
                    <h1 className="text-2xl">- MESSAGE IN A BOTTLE -</h1>
                </Link>
                <Link to="/submit" className="flex flex-col content-center gap-2 text-lg">
                    <img className="h-[70px] mx-auto" src={Feather} />
                    Send a Bottle
                </Link>
            </div>
        </>
    )
}

export default Navbar