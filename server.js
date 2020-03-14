const express = require('express');
const app = express();
const request = require('request');

app.get('/api/bitcoin', (req, res) => {
  request('http://api.bitcoincharts.com/v1/weighted_prices.json', { json: true }, (error, response, body) => {
    if (error) { return console.log(error); }
    res.send(body[req.query.currency]['30d']);
  });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);