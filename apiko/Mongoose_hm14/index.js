const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongoose-apiko')
  .then(() => console.log('Connectection established'))
  .catch(error => console.error(`An error occured: ${error}`))