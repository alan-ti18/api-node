'use strict'

// Importação dos módulos
   const express = require('express');
   const app = require('../src/app');
   const debug = require('debug')('balta:server');
   const http = require('http');
// Configuração do servidor
   const PORT = normalizePort(process.env.PORT || 3000);
   app.set('port', PORT);
   const server = http.createServer(app);
   const router = express.Router();

function normalizePort(val){
   const port = parseInt(val, 10);
   if(isNaN(port)){
      return val;
   }
   if(port >= 0) {
      return port;
   }

   return false;
}

function onError(err){
   if(err.syscall !== 'listen') {
      throw err;
   }

   const bind = typeof port === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

   switch (err.code){
      case 'EACCES':
         console.error(bind + ' requires elevated privileges');
         process.exit(1);
         break;
      case 'EADDRINUSE':
         console.error(bind + ' is already in use');
         process.exit(1);
         break;
      default:
         throw err;
   }
}

// Inicialização do servidor
   server.listen(PORT, console.log(`Rodando na porta ${PORT}`));
   server.on('error', onError);
   server.on('listening', onListening);

   function onListening(){
      const addr = server.address();
      const bind = typeof addr === 'strinng' ? 'pipe ' + addr : 'port ' + addr.port;
      debug("listening on " + bind)
   }