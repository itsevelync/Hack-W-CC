import React, { useEffect, useState } from 'react';
import storiesData from '../data/stories.json';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [stories, setStories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStories, setFilteredStories] = useState(storiesData);
    const [searchStatus, setSearchStatus] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setStories(storiesData);
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
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
                ? `Searching the Archive for messages to "${searchQuery}" - ${filtered.length} Posts Found`
                : `No posts found for "${searchQuery}"`
        );
    };

    const handleCardClick = (storyId) => {
        // Navigate to the StoryDetail page with the story id
        navigate(`/story/${storyId}`);
    };

    return (
        <div className='max-width-[1000px] px-[50px]'>
            <h1 className='text-m-brown text-center text-4xl mb-6'>Message in a Bottle</h1>

            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    className="border border-m-brown search-bg text-m-brown p-2 rounded-md w-full"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button
                    onClick={handleSearchClick}
                    className="ml-3 bg-m-brown text-white px-4 py-2 rounded-md"
                >
                    Search
                </button>
                <button
                    onClick={handleSearchClick}
                    className="ml-3 bg-m-navy text-white px-4 py-2 rounded-md"
                >
                    Random
                </button>
            </div>

            {searchStatus && (
                <p className="mb-4">
                    {searchStatus}
                </p>
            )}

            {/* Stories grid */}
            <div className='grid grid-cols-3 gap-4'>
                {filteredStories.map((story, index) => (
                    <div key={index} className={`story border border-${story.color}-400 p-4 rounded-md`} onClick={() => handleCardClick(index)}>
                        <p><strong>{story.title}</strong></p>
                        <p>{story.content}</p>
                        <p><strong>Tags:</strong> {story.tags.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;