import { Link } from "react-router-dom";
import Scroll from '../assets/Scroll.png';
import Feather from '../assets/Feather.png';
import { FaCircleExclamation } from "react-icons/fa6";

function Navbar(props) {

    return (
        <>
            <div className="w-[1000px] max-width-[90%] flex justify-between items-center gap-10 flex-wrap mx-auto my-5">
                <Link to="/about" className="flex flex-col content-center gap-2  text-lg">
                    <img className="h-[70px] mx-auto" src={Scroll} />
                    About Us
                </Link>
                {
                    props.page != "home" 
                    ?
                    (<Link to="/" className="flex content-center justify-center h-min">
                        <h1 className="text-2xl">- MESSAGE IN A BOTTLE -</h1>
                    </Link>)
                    :
                    ""
                }
                {
                    props.page === "submit"
                    ?
                    (<Link to="/submit" className="flex content-center text-lg">
                        <FaCircleExclamation className="text-6xl"/>
                    </Link>)
                    :
                    (<Link to="/submit" className="flex flex-col content-center gap-2 text-lg">
                        <img className="h-[70px] mx-auto" src={Feather} />
                        Send a Bottle
                    </Link>)
                }
            </div>
        </>
    )
}

export default Navbar