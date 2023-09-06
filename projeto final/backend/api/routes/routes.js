let express = require('express');
let router = express.Router();

const clientes = require('../controller/controller.js');

router.post('/api/cliente', clientes.createCliente); //add recursos no DB
router.get('/api/cliente/:id', clientes.getCliente); //retorna p usuario o resultado
router.get('/api/clientes', clientes.clientes);
router.put('/api/cliente', clientes.updateCliente);// modifica registro no DB
router.delete('/api/cliente/:id', clientes.deleteCliente); //deletar

module.exports = router;

/* callbacks */
//função q recebe parametro string, segundo argumento é função