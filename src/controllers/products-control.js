'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-rep');

exports.get = async (req, res, next) => {
   try{
      var data = await repository.get();
      res.status(200).send(data);
   }
   catch (err) {
      res.status(400).send({message: "Falha ao carregar produtos", data: err});
   }
}

exports.getBySlug = async (req, res, next) => {
   try{
      var data = await repository.getBySlug(req.params.slug);
      res.status(200).send(data);
   }
   catch (err) {
      res.status(400).send({message: "Falha ao carregar produto", data: err});
   }
}

exports.getByTag = async (req, res, next) => {
   try{
      var data = await repository.getByTag(req.params.tag);
      res.status(200).send(data);
   }
   catch (err) {
      res.status(400).send({message: 'Falha ao carregar produto', data: err});
   }
}

exports.post = async (req, res, next) => {
   let contract = new ValidationContract;
   contract.hasMinLen(req.body.title, 3, 'O título deve conter ao menos 3 caracteres!');
   contract.hasMinLen(req.body.slug, 3, 'O slug deve conter ao menos 3 caracteres!');
   contract.hasMinLen(req.body.description, 3, 'A descrição deve conter ao menos 3 caracteres!');

// se os dados forem inválidos
   if(!contract.isValid()){
      res.status(400).send(contract.errors()).end();
      return
   }
   try{
      await repository.create(req.body);
      res.status(201).send({message: "Produto cadastrado com sucesso!"});
   }
   catch (err) {
      res.status(400).send({message: "Falha ao cadastrar produto", data: e});
   }
}

exports.put = async (req, res, next) => {
   try{
      await repository.update(req.params.id, req.body);
      res.status(200).send({message: 'Produto atualizado com sucesso!'});
   }
   catch (err) {
      res.status(400).send({message: 'Falha ao atualizar produto!', data: err});
   }
}

exports.delete = async (req, res, next) => {
   try{
      await repository.delete(req.params.id)
      res.status(200).send({message: 'Produto excluído com sucesso!'});
   }
   catch (err) {
      res.status(400).send({message: 'Não foi possível excluir o produto!', data: err});
   }   
}