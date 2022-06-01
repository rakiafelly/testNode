const express = require('express')
const app = express()
const port = 7000;
//connect to database
require('./database/connect')
app.use(express.json())
// import routes
const clientApi = require('./routes/clientApi')
const produitApi=require('./routes/produitApi')
const commandeApi = require('./routes/commandeApi')
const authApi = require('./routes/authApi')



app.get('/api/v1', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/v1', clientApi)
app.use('/api/v1',produitApi)
app.use('/api/v1',commandeApi)
app.use('/api/v1',authApi)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})