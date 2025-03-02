import React from "react";
import Bottle from '../assets/bottle.png'; 
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <Navbar page="about"/>
            <div className="w-[1000px] max-width-[90%] flex flex-col gap-7 m-10 mx-auto">
                <div>
                    <h2 className="text-center text-3xl">What is</h2>
                    <h1 className="text-center text-5xl">Message in a Bottle?</h1>
                </div>
                <p className="text-base">Life can feel like an endless ocean—sometimes calm, sometimes stormy, and often overwhelming. Message in a Bottle is a place to send your unspoken words out to sea, knowing that someone, somewhere, might find them and understand.</p>
                <p className="text-base">This is an anonymous space to share your thoughts, whether they are whispers of hope, waves of frustration, or reflections from the heart. No matter what you’re carrying, you are not alone. In reading the messages of others, may you find comfort in knowing that we are all adrift together, navigating the same vast waters.</p>
                <Link to="/" className="px-5 py-3 rounded-2xl bg-m-brown hover:text-m-brown hover:bg-m-tan border-m-brown border-2 duration-300 text-m-tan w-max m-auto">Back to Shore</Link>
                <div className="ml-auto">
                    <img className="w-[100px] ml-auto" src={Bottle} />
                    <p className="text-right">Made with &lt;3 by</p>
                    <p className="text-right">Evelyn, Genesis, and Hebe</p>
                </div>
            </div>
        </>
    )
}

export default About;