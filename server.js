const express = require('express');
const axios = require('axios');
const qs = require('qs');
const cors = require('cors');

const app = express();
const port = 3000;

// Replace with your actual Spotify client ID and secret
const clientID = ' 5db0bacc2e1044429ee7d6654b7b04af';
const clientSecret = '86ffdae31ae646c3a644e5bde75ba1e0';

// Enable CORS to allow your frontend to request the token
app.use(cors());

// Endpoint to get the access token
app.get('/get-spotify-token', async (req, res) => {
  try {
    const authString = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify({ grant_type: 'client_credentials' }),
      {
        headers: {
          'Authorization': `Basic ${authString}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    res.json({ accessToken: response.data.access_token });
  } catch (error) {
    console.error('Error getting access token:', error);
    res.status(500).send('Failed to get access token');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
