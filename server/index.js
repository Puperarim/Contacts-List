const express = require('express');
require('dotenv').config();
const db = require('./db');
const cors = require('cors');
const router = require('./routes/contactRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const start = async () => {
    try {
        await db.authenticate();
        await db.sync();
        app.listen(PORT, () => console.log('Работает...'));
    } catch (err) {
        console.log(err);
    }
}
start();