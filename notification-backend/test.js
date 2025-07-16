import express from 'express';
import axios from 'axios';
import admin from 'firebase-admin';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());



app.get('/',(req,res) => {
  res.send("Hii from Ashish");
})


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

