require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use('/', indexRouter);

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is listening on: ${port}`);
});