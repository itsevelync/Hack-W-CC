import React from 'react';
import { useParams } from 'react-router-dom';
import storiesData from '../data/stories.json';
import Navbar from "../components/Navbar";

function Story() {
  const { id } = useParams(); // Get the story id from the URL
  const story = storiesData[id]; // Fetch the story using the id

  return (
    <>
      <Navbar page="story"/>
      <div>
        <h1 className=''>{story ? story.title : 'Story Not Found'}</h1>
        <hr className='border-m-brown mb-4' />
        <p>{story.content}</p>
      </div>
    </>
  );
}

export default Story;
