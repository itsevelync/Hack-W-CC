import { Link } from "react-router-dom";
import Scroll from '../assets/Scroll.png';
import Feather from '../assets/Feather.png';
import Notice from "./Notice";
import { useState } from "react";
import Resources from '../assets/resources.svg';

function Navbar(props) {

    const [overlayVisible, setOverlayVisible] = useState(false);

    const openOverlay = () => {
        setOverlayVisible(true);
    }

    const closeOverlay = () => {
        setOverlayVisible(false);
    }

    return (
        <>
            <div className="w-[1000px] max-width-[90%] flex justify-between items-center gap-10 flex-wrap mx-auto my-5">
                <Link to="/about" className="flex flex-col content-center gap-2 text-lg cursor-pointer hover:text-m-red duration-300">
                    <img className="h-[70px] mx-auto" src={Scroll} />
                    About Us
                </Link>
                {
                    props.page != "home" && props.page != "about"
                        ?
                        (<Link to="/" className="flex content-center justify-center h-min cursor-pointer ">
                            <h1 className="text-2xl hover:text-m-red duration-300">- MESSAGE IN A BOTTLE -</h1>
                        </Link>)
                        :
                        ""
                }
                {
                    props.page === "submit"
                        ?
                        <>
                            <img src={Resources} className="text-6xl cursor-pointer duration-300" onClick={openOverlay} />
                            <Notice onClose={closeOverlay} isVisible={overlayVisible} />
                        </>
                        :
                        (<Link to="/submit" className="flex flex-col content-center gap-2 text-lg cursor-pointer hover:text-m-red duration-300">
                            <img className="h-[70px] mx-auto" src={Feather} />
                            Send a Bottle
                        </Link>)
                }

                {props.page == "home" &&
                    <>
                        <img src={Resources} className="fixed bottom-5 left-5 z-[50] text-6xl cursor-pointer" onClick={openOverlay} />
                        <Notice onClose={closeOverlay} isVisible={overlayVisible} />
                    </>
                }
            </div>
        </>
    )
}

export default Navbar