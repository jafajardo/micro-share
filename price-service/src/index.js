const result = require('dotenv').config();
const express = require('express');
const axios = require('axios');

const CustomError = require('../errors/custom-error');

const app = express();
app.use(express.json());

app.post('/api/price/currentPrice', async (req, res) => {
  try {
    const response = await axios.get(
      `https://asx.api.markitdigital.com/asx-research/1.0/companies/${req.body.share}/key-statistics`
    );

    return res.status(200).json(response.data);
  } catch (err) {
    console.log(`ASX service did not return a response with message: ${err}`);

    // throw new CustomError(
    //   `ASX service did not return a response with message: ${err}`
    // );
  }
});

app.get('/api/price/status', (req, res) => {
  res.send({ Alive: true });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
