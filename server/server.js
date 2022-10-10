const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const {errorHandler} = require('./middleware/errorMiddleware');
const {connectDataBase} = require('./config/db')

const goalRouter = require('./routes/goalRoutes');
const userRoute = require('./routes/userRoutes')

connectDataBase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/goals', goalRouter);
app.use('/api/users', userRoute);

app.use(errorHandler);

app.listen(port, ()=> console.log(`Server started on Port ${port}`));

//Authentication & Authorizations