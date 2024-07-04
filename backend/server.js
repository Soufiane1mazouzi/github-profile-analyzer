const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/github/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const userData = await axios.get(`https://api.github.com/users/${username}`);
    res.json(userData.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
