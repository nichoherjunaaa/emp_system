const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const sqlConnection = require('./config/sqlConnect');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const authRouter = require('./route/authRoute');
const empRouter = require('./route/empRoute');
// const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(morgan('dev'));

app.use(cors({
    origin:'http://localhost:5173',
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

(async () => {
    try {
        await sqlConnection.authenticate();
        console.log('Database Connected');
    } catch (error) {
        console.error('Database connection error ! ');
        process.exit(1);
    }
})();

app.get('/', (req, res) => {
    res.status(200).send('API ready!');
});

app.use('/api/auth', authRouter);
app.use('/api/emp', empRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
