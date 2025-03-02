import React, { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import { PiHandHeartBold, PiHandHeartFill } from "react-icons/pi";
import axios from 'axios'; // Import axios for making HTTP requests

function Story({ id, onClose, isVisible }) {
    const [story, setStory] = useState(null);
    const [isLoved, setLoved] = useState(false);
    const [hearts, setHearts] = useState(0);

    // Fetch the story data when the component mounts or when `id` changes
    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/stories/${id}`);
    
                // Check if the response is not JSON
                if (!response.ok) {
                    throw new Error('Story not found');
                }
    
                const data = await response.json();
                setStory(data);
                setHearts(data.hearts);
                setLoved(false); // Reset heart status
            } catch (err) {
                console.error("Error fetching story", err);
                // Optionally, set a state to show an error message
            }
        };
    
        if (id !== null) {
            fetchStory();
        }
    }, [id]);    

    const handleHeartsChange = async () => {
        const newHearts = hearts + 1;
        setLoved(true);
        setHearts(newHearts);
    
        try {
            // Make a PUT request to update the hearts count on the backend
            await axios.put(`http://localhost:5000/api/stories/${id}`, { hearts: newHearts });
        } catch (err) {
            console.error('Error updating hearts', err);
        }
    };
    

    if (!isVisible || !story) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div onClick={onClose} className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-50 cursor-pointer"></div>
            <div className="z-99 relative story-bg w-[700px] h-[400px] border-2 border-m-brown rounded-lg flex flex-col gap-2 py-15 px-10 pt-20 m-auto">
                <FaWindowClose className="absolute right-10 top-10 text-3xl cursor-pointer" onClick={onClose} />
                <div>
                    <h1 className="text-2xl mb-2">{story.title}</h1>
                    <hr className="border border-m-brown mb-4" />
                    <p className="mb-7">{story.content}</p>
                    <p className="mb-7"><b>Tags: </b>{story.tags.join(', ')}</p>
                    <div className="cursor-pointer" onClick={handleHeartsChange}>
                        <p className="flex items-center text-2xl">
                            {!isLoved ? <PiHandHeartBold size={30} /> : <PiHandHeartFill size={30} />}
                            &nbsp; {hearts}
                        </p>
                        {!isLoved && <p className="text-xs mt-1"><em>Click to add a heart.</em></p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;