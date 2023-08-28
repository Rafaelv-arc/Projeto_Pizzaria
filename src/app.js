const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
import path from 'path';

class App{
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();

    mongoose.connect('mongodb+srv://devhouse:devhouse@cluster0.jwlieny.mongodb.net/devhouse', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    });

  }

  middlewares(){
    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;