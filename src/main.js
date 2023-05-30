const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const flightsData = require('./model/flightsData.js');
const hotelsData = require('./model/hotelsData.js');
const citiesData = require('./model/destinationData.js');
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// 'route?from=sdfsd&to=sdfsdf&departure=2020-01-01&return=2020-01-01&'
app.get('/flight', (req, res) => {
    const { from, to, departureDate, returnDate } = req.query;
    console.log(from, to, departureDate, returnDate);
    res.send(flightsData)
  })

  app.get('/hotels', (req, res) => {
    const { destination, from_date, to_date, adult, child, baby, keyword } = req.query;
    res.send(hotelsData)
  })

  app.get('/city',(req,res) => {
    const {destination} = req.query;
    res.send(citiesData)
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
