import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import feather from '../assets/feather.png';
import Navbar from "../components/Navbar";

function Submit() {
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [error, setError] = useState('');

    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };

    const handleTagKeyPress = (e) => {
        if (e.key === 'Enter' && tagInput.trim() !== '') {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
            e.preventDefault();
        }
    };

    const handleTagDelete = (index) => {
        const newTags = tags.filter((_, tagIndex) => tagIndex !== index);
        setTags(newTags);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleColorChange = (newColor) => {
        setColor(newColor);  // Set the selected color
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setError("Please add a title.");
            return;
        }

        if (!description) {
            setError("Your story cannot be empty.");
            return;
        }

        if (tags.length === 0) {
            setError("Please add at least one tag.");
            return;
        }

        if (!color) {
            setError("Please select a color.");
            return;
        }

        // Reset error if all validations pass
        setError('');

        const newStory = {
            title: title,
            content: description,
            tags: tags,
            color: color,
        };

        try {
            const response = await fetch('http://localhost:5000/api/stories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStory),
            });

            if (response.ok) {
                console.log('Story successfully submitted');
                setDescription('');
                setTags([]);
                setTitle('');
                setColor('');
            } else {
                console.error('Failed to submit story');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar page="submit" />
            <div className='w-full h-screen max-w-9/10 justify-center m-auto p-6'>
                {/* <h1 className='text-center text-xl pb-4'>Message in a Bottle</h1> */}
                <form className='h-full w-full' id="submitForm" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-5 gap-8 h-full w-full">
                        <img className='col-start-1 h-8/10 w-full' src={feather} />
                        <div className='col-start-2 col-span-2 h-full w-full'>
                            <h1 className="text-left text-2xl pb-4">Write your message:</h1>
                            <textarea
                                className="border w-full border-gray-400 p-2 rounded-md h-full mb-5 col-start-1 resize-none search-bg"
                                id="description"
                                name="description"
                                placeholder="Start typing here..."
                                value={description}
                                onChange={handleDescriptionChange}
                                onKeyDown={handleKeyDown}
                            ></textarea>
                        </div>

                        <div className='col-start-4 col-span-2 h-full w-full mt-6'>
                            <label htmlFor="title">Title:</label><br />
                            <input
                                className="border w-full border-gray-400 p-2 rounded-md mb-5"
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Add your title"
                                value={title}
                                onChange={handleTitleChange}
                            />

                            <label className='col-start-2' htmlFor="tags">Tags:
                                <br />
                                <em className='text-sm'>Use the 'Enter' key to add a tag.</em></label><br />
                            <input
                                className="border border-gray-400 rounded-md p-2 w-[50%] col-start-2"
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="e.g., rant, United States, nostalgia"
                                value={tagInput}
                                onChange={handleTagInputChange}
                                onKeyDown={handleTagKeyPress}
                            />

                            <div className="w-full tags-container flex gap-2 mt-2 mb-5 col-start-2 flex-wrap" id="tagsContainer">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="tag cursor-pointer border p-2 rounded-md flex justify-center items-center bg-m-purple"
                                        onClick={() => handleTagDelete(index)}
                                    >
                                        <span className="delete-tag pointer mr-1">
                                            <IoClose />
                                        </span>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Color Buttons */}
                            <label className='col-start-2' htmlFor="color">Select a color:</label><br />
                            <div className="flex gap-3 mb-5">
                                <button
                                    type="button"
                                    className={`border p-2 rounded-md ${color === 'red' ? 'bg-red-500 text-white' : 'bg-white'}`}
                                    onClick={() => handleColorChange('red')}
                                >
                                    Red
                                </button>
                                <button
                                    type="button"
                                    className={`border p-2 rounded-md ${color === 'green' ? 'bg-green-500 text-white' : 'bg-white'}`}
                                    onClick={() => handleColorChange('green')}
                                >
                                    Green
                                </button>
                                <button
                                    type="button"
                                    className={`border p-2 rounded-md ${color === 'blue' ? 'bg-blue-500 text-white' : 'bg-white'}`}
                                    onClick={() => handleColorChange('blue')}
                                >
                                    Blue
                                </button>
                            </div>
                            <button className="rounded-md cursor-pointer mt-3 bg-m-brown hover:bg-m-red duration-300 px-4 py-2 text-white" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}


                </form>
            </div>
        </>
    );
}

export default Submit;