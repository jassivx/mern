import express from 'express';
import dbConnection from './DB/db.js';
const app = express();


dbConnection();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
const PORT = 8080;

app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`);
});