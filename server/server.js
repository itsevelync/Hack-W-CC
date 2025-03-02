const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Use body-parser to parse JSON request bodies
app.use(bodyParser.json());

const storiesFilePath = path.join(__dirname, '..', 'client', 'src', 'data', 'stories.json');

// Endpoint to handle story submission
app.post('/api/stories', (req, res) => {
    const newStory = req.body;

    fs.readFile(storiesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file', err);
            return res.status(500).send('Server error');
        }

        let stories = [];
        try {
            stories = JSON.parse(data);
        } catch (err) {
            console.error('Error parsing JSON', err);
        }
        newStory.id = stories.length;
        newStory.hearts = 0;
        stories.push(newStory);

        fs.writeFile(storiesFilePath, JSON.stringify(stories, null, 2), (err) => {
            if (err) {
                console.error('Error writing the file', err);
                return res.status(500).send('Server error');
            }
            res.status(200).send('Story submitted successfully');
        });
    });
});


// Endpoint to handle fetching a specific story by ID
app.get('/api/stories/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile(storiesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file', err);
            return res.status(500).send('Server error');
        }

        let stories = [];
        try {
            stories = JSON.parse(data);
        } catch (err) {
            console.error('Error parsing JSON', err);
        }

        const story = stories[id];

        if (!story) {
            return res.status(404).send('Story not found');
        }

        res.json(story);
    });
});

app.put('/api/stories/:id/heart', (req, res) => {
    const { id } = req.params;
    const { hearts } = req.body;

    fs.readFile(storiesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file', err);
            return res.status(500).send('Server error');
        }

        let stories = [];
        try {
            stories = JSON.parse(data);
        } catch (err) {
            console.error('Error parsing JSON', err);
        }

        // Find the story by ID and update the hearts count
        const storyIndex = stories.findIndex(story => story.id === parseInt(id));
        if (storyIndex !== -1) {
            stories[storyIndex].hearts = hearts;
        } else {
            return res.status(404).send('Story not found');
        }

        // Write the updated stories back to the file
        fs.writeFile(storiesFilePath, JSON.stringify(stories, null, 2), (err) => {
            if (err) {
                console.error('Error writing the file', err);
                return res.status(500).send('Server error');
            }
            res.status(200).send('Hearts updated successfully');
        });
    });
});

app.put('/api/stories/:id', (req, res) => {
    const { id } = req.params;
    const { hearts } = req.body;

    fs.readFile(storiesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file', err);
            return res.status(500).send('Server error');
        }

        let stories = [];
        try {
            stories = JSON.parse(data);
        } catch (err) {
            console.error('Error parsing JSON', err);
        }

        // Find the story by ID
        const storyIndex = stories.findIndex(story => story.id === parseInt(id));
        if (storyIndex === -1) {
            return res.status(404).send('Story not found');
        }

        // Update the hearts count for the found story
        stories[storyIndex].hearts = hearts;

        // Write the updated data back to the JSON file
        fs.writeFile(storiesFilePath, JSON.stringify(stories, null, 2), (err) => {
            if (err) {
                console.error('Error writing the file', err);
                return res.status(500).send('Server error');
            }
            res.status(200).send('Hearts updated successfully');
        });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
