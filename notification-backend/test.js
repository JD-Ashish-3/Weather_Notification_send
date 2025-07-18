const express = require('express');
const axios = require('axios');
const admin = require('firebase-admin');
const serviceAccount = require('./MyfcmKey.json');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const port = 3000;
const apikey = process.env.WEATHER_API_KEY;
const city = process.env.CITY;

let tokens = [
  'clBfRWu6XnnswiQv96uOgE:APA91bF2WXt-yw5qHTShKDYKHGrspjaunuU--Db8WROrSJeRpBrPDRhOlmv0NCpCpwLPXSBfuL8hSFt4LKGWuHTpu64FdW2767MccpsXh8iPMIwX1DZuSiU',
  'cCaLu4kdhcmj_HYm7ZmXTs:APA91bEbdwjn8dEjQVRq-vYzjOCvZ61tQ1Jhu4sthA4leih3hhg3X39BL6jeZcLhvQJj2A-voOapu2mjCTxgl4lDv2jJe-X1PWeBkJrPffKpLE21J8uZ9zA',
]

app.use(cors());
app.use(express.json());



app.get('/',(req,res) => {
  res.send("Hii from Ashish");
})

// To get the percent of rain from the json of the weather api
app.get('/weather', async(req,res)=>
{
  const {data} = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=1&aqi=yes&alerts=yes`);
//to see the whole data of the api in /weather api
    // res.json(data);
    if (!data.forecast || !data.forecast.forecastday) {
      return res.status(500).json({ error: 'Invalid API response', data });
    }
    else{
    console.log(`${data.forecast.forecastday[0].day.daily_chance_of_rain}%`);
    res.json(data.forecast.forecastday[0].day.daily_chance_of_rain);
    }
})

const sendNotification = async()=>
{
  try {
    const {data} = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=1&aqi=yes&alerts=yes`);
    
    if (!data.forecast || !data.forecast.forecastday) {
      console.error('Invalid API response:', JSON.stringify(data));
      return;
    }

    let forecast = data.forecast.forecastday[0].day;
    let rainingChance = forecast.daily_chance_of_rain;
    let willRain = forecast.daily_will_it_rain === 0 ? 'No' : 'Yes';

    console.log(`${rainingChance} % chance of rain`);

    const message = {
      notification: {
        title: 'Daily Rain Update From Ashish',
        body: `Will it Rain: ${willRain}\nChance of Raining: ${rainingChance}%`,
      },
      tokens: tokens,
    };

    const response = await admin.messaging().sendEachForMulticast(message);
    console.log(`Notification sent successfully: ${JSON.stringify(response)}`);
  } catch (error) {
    console.error('Error in sendWeatherNotification:', error);
  }
}

setInterval(sendNotification,10000);

app.post('/send-notification', async (req, res) => {
  try {
    const message = {
      notification :
      {
        title: 'abe testing',
        body: 'abe body',
      },
      tokens: tokens,
    };
      const response = await admin.messaging().sendEachForMulticast(message);
      res.status(200).send(`Notification sent successfully: ${JSON.stringify(response)}`);

    }
     catch (error) {
     console.error('Error sending notification:', error);
    res.status(500).send(`Error sending notification: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

