const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')


const bodyParser = require('body-parser');

const Appareil = require('./models/Appareil');

mongoose.connect('mongodb://127.0.0.1:27017/appareil',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();

  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  //   next();
  // });

  app.use(bodyParser.json());
  app.use(cors())
<  

  app.post('/api/appareils', (req, res, next)=>{
      const appareil = new Appareil({...req.body});
        appareil.save()
        .then(res.status(200).json({message: "POST successful" }))
        .catch(error=>res.status(400).json({error: "error POST request"}))
        console.log(res.body)
  })

  app.get('/api/appareils', (req, res, next)=>{
      Appareil.find()
      .then(appareils=>res.status(200).json({appareils}))
      .catch(error=>res.status(400).json({error: 'error GET request'}))
  })



  module.exports = app;