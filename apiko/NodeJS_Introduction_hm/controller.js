const { config } = require('dotenv')
config()

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS,
  Promise: Promise
})
const DarkSky = require('dark-sky')
const darksky = new DarkSky(process.env.DARK_SKY)

 const getWeathearData = async (locat,time) => {
  try {
    const response = await googleMapsClient.geocode({
      address: locat
      }).asPromise()
  .then((respons) => respons.json.results)
const  [USER_latitude, USER_longitude] = await [response[0].geometry.location.lat, response[0].geometry.location.lng]

    const data = await darksky
    .options({
        latitude: USER_latitude,
        longitude: USER_longitude,
        time: time ,  /*'2017-08-10'*/
        language: 'en',
        exclude: ['minutely', 'daily'],
        extendHourly: true
    })
    .get()
    .then(console.log)
    .catch(error=>console.log(error))
 return data
}
  catch (err) {
    console.log(err)
  }
}

module.exports = getWeathearData

