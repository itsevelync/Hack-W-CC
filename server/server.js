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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});