import React, { useEffect, useState } from 'react';
import storiesData from '../data/stories.json';

function Home() {

    const [stories, setStories] = useState([]);

    // Load the stories data when the component mounts
    useEffect(() => {
        setStories(storiesData);
    }, []);

    return (
        <div>
            <p>Home page!!</p>
            {stories.map((story, index) => (
                <div key={index} className="story">
                    <p><strong>Story {index + 1}:</strong></p>
                    <p>{story.content}</p>
                    <p><strong>Tags:</strong> {story.tags.join(', ')}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Home