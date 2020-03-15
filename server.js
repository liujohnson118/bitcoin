const express = require('express');
const app = express();
const request = require('request');

app.get('/api/bitcoin', (req, res) => {
  request('http://api.bitcoincharts.com/v1/weighted_prices.json', { json: true }, (error, response, body) => {
    if (error) { return console.log(error); }
    if (body[req.query.currency]){
      res.send(body[req.query.currency]['30d']);
    }else{
      res.status(404).send({error: 'currency not found'})
    }
  });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);