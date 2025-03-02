import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";

function Submit() {
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');

    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };

    const handleTagKeyPress = (e) => {
        if (e.key === 'Enter' && tagInput.trim() !== '') {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form Submitted:', { tags });
    };

    const handleTagDelete = (index) => {
        // Remove tag by filtering out the tag at the given index
        const newTags = tags.filter((_, tagIndex) => tagIndex !== index);
        setTags(newTags);
    };

    return (
        <div className='w-full max-w-[700px] m-auto '>
            <h1 className="font-bold text-center text-2xl">Submit your story!</h1>
            <form id="submitForm" onSubmit={handleSubmit}>
                <label htmlFor="description">Share your story below:</label><br />
                <textarea className="border w-full border-gray-400 p-2 rounded-md h-[300px] mb-5" id="description" name="description" 
                    placeholder="Start typing here..." required>
                </textarea>
                <label htmlFor="tags">Tags:</label><br />
                <input
                    className="border border-gray-400 rounded-md p-2 w-[50%]"
                    type="text"
                    id="tags"
                    name="tags"
                    placeholder="e.g., rant, United States, nostalgia"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagKeyPress}
                />

                <div className="tags-container flex gap-2 mt-2" id="tagsContainer">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag cursor-pointer border p-1 rounded-sm flex justify-center items-center"
                            onClick={() => handleTagDelete(index)}>
                            <span
                                className="delete-tag pointer mr-1"
                            ><IoClose /></span>
                            {tag}
                        </span>
                    ))}
                </div>

                <button className='rounded-md mt-5 bg-black px-4 py-2 text-white' type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Submit;