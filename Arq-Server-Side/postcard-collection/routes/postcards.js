var express = require('express');
var router = express.Router();
const {listAll, listOne, add, remove, listAllMongo, listOneMongo, addMongo, removeMongo} = require('../controller/postcards');

// Rota GET para obter todos os Postcards
router.get('/', (req, res) => {
  //listAll(res);
  listAllMongo(res);
});

// Rota GET para obter um Postcard
router.get('/:id', (req, res) =>{
  const postId = req.params.id;
  //listOne(postId,res);
  listOneMongo(postId,res);
});

//Rota POST para adc um novo Postcard
router.post('/', (req, res) => {
  //add(res, req);
  addMongo(res, req);
});

//Rota DELETE
router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  //remove(res,id)
  removeMongo(res,id);   
})

module.exports = router;
