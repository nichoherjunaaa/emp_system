const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3000
const sqlConnection = require('./config/sqlConnect')
const { notFound, errorHandler } = require('./middleware/errorHandler')
const authRouter = require('./route/authRoute')
const empRouter = require('./route/empRoute')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // Izinkan cookie
}));
app.use(cookieParser())
app.use(express.json())
sqlConnection.authenticate()
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log('database error: ' + err))

app.get('/', (req, res) => {
    res.send('API ready!')
})

app.use('/api/auth', authRouter)
app.use('/api/emp', empRouter)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`server running on port ${PORT}`))