'use strict'
// Carregamento dos módulos
   const express = require('express');
   const bodyParser = require('body-parser');
   const app = express();
   const router = express.Router();
   const mongoose = require('mongoose');
   const config = require('./config');

// Configuração do BodyParser
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: false}));

// Conexão com o banco de dados
   // mongoose.connect('mongodb+srv://dbuser:yp1ranga@cluster0-z8a78.gcp.mongodb.net/ndstr', {useNewUrlParser: true})
      mongoose.connect(config.connectString)
      .then(() => {
         console.log('Conectado ao MongoDB');
      })
      .catch((err) => {
         console.log(`Não foi possível conectar. Erro: ${err}`);
      })

// Carregar os Models
   const Product = require('./models/products');
   const Customer = require('./models/customer');
   const Order = require('./models/order')

// Carregar as rotas
   const index = require('../routes/index');
   const products = require('../routes/products');
   const customer = require('../routes/customer');
   const order = require('../routes/order');

app.use('/', index);
app.use('/products', products);
app.use('/customers', customer);
app.use('/orders', order);

module.exports = app;