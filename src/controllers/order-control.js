'use strict'

const repository = require('../repositories/order-rep');
const guid = require('guid');

exports.post = async (req, res, next) => {
   try{
      await repository.create({
         customer: req.body.customer,
         number: guid.raw().substring(0,6),
         items: req.body.items
      });
      res.status(201).send({message: 'Pedido cadastrado com sucesso!'});
   }
   catch (err) {
      res.status(500).send({message: 'Falha ao processar sua requisição', data: err});
   }
}

exports.get = async (req, res, next) => {
   try{
      await repository.get();
   }
   catch (err) {
      res.status(500).send({message: 'Falha ao processar sua requisição'});
   }
}