import React from "react";
import { FaWindowClose } from "react-icons/fa";

function Notice({onClose, isVisible}) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div onClick={onClose} className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-50 ">
            </div>
            <div className="z-99 w-[700px] h-[400px] bg-m-tan border-2 border-m-brown">
                <FaWindowClose className="absolute right-2 "/>
            </div>
        </div>
    )
}

export default Notice;