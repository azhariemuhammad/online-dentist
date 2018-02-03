const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan('dev'))

mongodb://<dbuser>:<dbpassword>@ds133876.mlab.com:33876/appointment
mongoose.connect(`mongodb://wisnu:123@ds159845.mlab.com:59845/mydb_hacktiv8`)
mongoose.Promise = global.Promise
mongoose.connection.once('open', function () {
  console.log('Connection has been made, build online dentist');
}).on('error', (error) => {
  console.log("connection error: ==================", error.message);
})

app.get('/', function(req, res){
res.send('hello world')
})

const api = require('./routes/users_api')
app.use('/api', api)


app.listen(process.env.PORT || '3000')