import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Notice({onClose, isVisible}) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div onClick={onClose} className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-50 cursor-pointer">
            </div>
            <div className="z-99 relative w-[700px] h-[400px] bg-m-tan border-2 border-m-brown rounded-lg flex flex-col gap-2 py-15 px-10 pt-20 m-auto">
                <FaWindowClose className="absolute right-10 top-10 text-3xl cursor-pointer" onClick={onClose}/>
                <p className="mb-5"><strong>You are not alone.</strong> If you’re feeling overwhelmed, distressed, or if you need someone to talk to, here are some resources:</p>
                <span className="inline">
                    <a href="https://befrienders.org/" className="underline font-bold">befrienders.org</a>
                    <span> – global network of emotional support service</span>
                </span>
                <span className="inline">
                    <a href="https://988lifeline.org/" className="underline font-bold">988 Suicide and Crisis Lifeline (U.S.)</a>
                    <span> – call or text 988</span>
                </span>
                <span className="inline">
                    <a href="https://www.crisistextline.org/" className="underline font-bold">Crisis Text Line</a>
                    <span> – text HELLO to 741741 (U.S.), SHOUT to 85258 (UK), or CONNECT to 686868 (Canada).</span>
                </span>
                <span className="inline">
                    <a href="https://findahelpline.com/" className="underline font-bold">Find A Helpline</a>
                    <span> – find mental health resources worldwide</span>
                </span>
                <FaHeart className="text-5xl mx-auto mt-5"/>
            </div>
        </div>
    )
}

export default Notice;