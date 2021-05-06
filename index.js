const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const config = require('./config/key')

const dotenv = require('dotenv')
dotenv.config();

app.use(cors({ origin: true, credentials: true }));
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// application/json
app.use(bodyParser.json())
app.use(cookieParser())

const mongoose = require('mongoose')
mongoose.connect(config.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(() => console.log('MongoDB Connected!'))
	.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello:)'))
app.use('/api/staffs', require('./routes/staffs'))
app.use('/api/users', require('./routes/users'))
app.use('/api/products', require('./routes/products'))
app.use('/api/stores', require('./routes/stores'))
app.use('/api/orders', require('./routes/orders'))

app.listen(port, () => {
  if(port === 5000) console.log(`Example app listening at http://localhost:${port}`)
})