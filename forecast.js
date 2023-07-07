// Import module
const axios = require('axios');
require('dotenv').config();

// API KEY dari env
const apiKey = process.env.API_KEY;

// function untuk mengambil data ramalan cuaca dari API OpenWeatherMap
function getWeatherForecast() {
  // return new Promise(function(resolve, reject) {
      const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Jakarta,id&appid='+apiKey;
      return axios.get(url)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to fetch weather data');
        }
        return response.data.list;
      })
      .catch(error => {
        console.log('Error:', error.message);
        throw error;
      });
    }
  
  // Fungsi untuk mencetak suhu per hari
  function printWeatherForecast(forecasts) {
    const printedDays = new Set();

    forecasts.forEach(forecast => {
      const date = new Date( forecast.dt * 1000);
      // let dateFormat = Date.parse("Fri, Jul 7, 2023");
      const formattedDate = date.toLocaleDateString( 'en-SG',{
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
  
    // Cek apakah hari sudah dicetak sebelumnya
    if (!printedDays.has(formattedDate)) {

      // Convert temperature from Kelvin to Celsius
      const temperature = Math.round(forecast.main.temp - 273.15); 

      console.log(`${formattedDate}: ${temperature}°C`);
      printedDays.add(formattedDate);
    }    
  });
  }
  
  // Mengambil data ramalan cuaca dan mencetaknya
  getWeatherForecast()
    .then(forecasts => {
      printWeatherForecast(forecasts);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });