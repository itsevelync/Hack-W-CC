import React, { useEffect, useState } from 'react';
import storiesData from '../data/stories.json';
import Wave from '../assets/wave.svg';
import TagLeft from '../assets/tag-left.svg';
import TagRight from '../assets/tag-right.svg';
import { FaFilter } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Bottle2 from '../assets/bottle2.svg';
import Ribbon from '../assets/ribbon.svg';
import Story from "../components/Story";

function Home() {
    const [stories, setStories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStories, setFilteredStories] = useState(storiesData);
    const [searchStatus, setSearchStatus] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedStoryId, setSelectedStoryId] = useState(null);

    const [overlayVisible, setOverlayVisible] = useState(false);

    const openOverlay = () => {
        setOverlayVisible(true);
    }

    const closeOverlay = () => {
        setOverlayVisible(false);
    }

    useEffect(() => {
        setStories(storiesData);
    }, []);

    useEffect(() => {
        if (searchQuery !== '') {
            const filtered = stories.filter((story) => {
                const query = searchQuery.toLowerCase();
                return (
                    story.title.toLowerCase().includes(query) ||
                    story.content.toLowerCase().includes(query) ||
                    story.tags.some(tag => tag.toLowerCase().includes(query))
                );
            });
            setFilteredStories(filtered);
            setSearchStatus(
                filtered.length > 0
                    ? `Searching stories for "${searchQuery}" - ${filtered.length} ${filtered.length === 1 ? 'post' : 'posts'} found`
                    : `No posts found for "${searchQuery}"`
            );
        } else {
            setFilteredStories(storiesData);
            setSearchStatus(null);
        }
    }, [searchQuery, stories]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchQuery(searchQuery);
    };

    const handleRandomClick = () => {
        let storyId = Math.floor(Math.random() * stories.length);
        setSelectedStoryId(storyId);
        openOverlay();
    };

    const handleCardClick = (storyId) => {
        setSelectedStoryId(storyId);
        openOverlay();
    };

    const handleTagFilterChange = (tag) => {
        const newSelectedTags = selectedTags.includes(tag)
            ? selectedTags.filter(t => t.toLowerCase() !== tag.toLowerCase())
            : [...selectedTags, tag];

        setSelectedTags(newSelectedTags);

        const filtered = filteredStories.filter((story) => {
            return newSelectedTags.every(tag => story.tags.some(storyTag => storyTag.toLowerCase() === tag.toLowerCase()));
        });
        setFilteredStories(filtered);
    };

    const filterTags = ['Rant', 'Angry', 'Positive', 'Mindful'];

    return (
        <>
            <Navbar page="home" />
            <div className='max-w-[1200px] px-[50px] my-10 mx-auto'>
                <h1 className='text-m-brown text-center text-4xl mb-8'>Message in a Bottle</h1>

                <div className="mb-4 flex items-center">
                    <div className='flex items-center w-full'>
                        <input
                            type="text"
                            className="border border-m-brown search-bg text-m-brown p-2 rounded-md w-full"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <FaFilter
                            className='-ml-7 text-m-brown cursor-pointer'
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        />
                    </div>
                    <button
                        onClick={handleSearchClick}
                        className="ml-3 bg-m-brown text-white hover:text-m-brown hover:bg-m-tan border-m-brown border-2 duration-300 px-4 py-2 rounded-md cursor-pointer"
                    >
                        Search
                    </button>
                    <button
                        onClick={handleRandomClick}
                        className="ml-3 bg-m-navy text-white hover:text-m-navy hover:bg-m-tan border-m-navy border-2 duration-300 px-4 py-2 rounded-md cursor-pointer"
                    >
                        Random
                    </button>
                </div>

                {isFilterOpen && (
                    <div className="bg-white border mb-3 border-m-brown p-4 rounded-md search-bg w-full">
                        <div className="flex gap-4">
                            {filterTags.map((tag) => (
                                <label className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        checked={selectedTags.includes(tag)}
                                        onChange={() => handleTagFilterChange(tag)}
                                        className='mr-2'
                                    />
                                    <img src={TagLeft} className='h-[25px]' />
                                    <div className='h-[25px] bg-[#C896CA] flex items-center -mx-[1px]'>
                                        <p className='text-white pl-1 text-xs'>{tag}</p>
                                    </div>
                                    <img src={TagRight} className='h-[25px]' />
                                </label>
                            ))}
                        </div>
                    </div>
                )}

                {searchStatus && (
                    <p className="mb-4">
                        {searchStatus}
                    </p>
                )}

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-15 p-7'>
                    {filteredStories.map((story, index) => (
                        <div key={index} className={`story cursor-pointer rounded-md card`} onClick={() => handleCardClick(index)}>
                            <div className='relative max-w-[225px] m-auto'>
                                <img className='max-w-[225px] m-auto' src={Bottle2} />
                                <img className={`absolute max-w-[225px] top-0 left-0 right-0 mx-auto w-max filter-${story.color}`} src={Ribbon} />
                            </div>

                            <p className='text-m-brown text-center mt-3'><strong>{story.title}</strong></p>
                            <div className='flex gap-y-2 gap-x-4 flex-wrap mt-3'>
                                {story.tags.map((tag) => (
                                    <div className='flex items-center'>
                                        <img src={TagLeft} className='h-[25px]' />
                                        <div className='h-[25px] bg-[#C896CA] flex items-center -mx-[1px]'>
                                            <p className='text-white pl-1 text-xs'>{tag}</p>
                                        </div>
                                        <img src={TagRight} className='h-[25px]' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <img className='fixed bottom-0 right-0 z-[-50] max-w-[520px]' src={Wave} />
            </div>

            {selectedStoryId !== null && (
                <Story id={selectedStoryId} onClose={closeOverlay} isVisible={overlayVisible} />
            )}
        </>
    );
}

export default Home;
