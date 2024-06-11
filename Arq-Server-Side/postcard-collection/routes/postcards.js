var express = require('express');
var router = express.Router();
const {listAll, listOne, add, remove} = require('../controller/postcards');

// Rota GET para obter todos os Postcards
router.get('/', (req, res) => {
  listAll(res);
});

// Rota GET para obter um Postcard
router.get('/:id', (req, res) =>{
  const postId = req.params.id;
  listOne(postId,res);
});

//Rota POST para adc um novo Postcard
router.post('/', (req, res) => {
  add(res, req);
});

//Rota DELETE
router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  remove(res,id)   
})

module.exports = router;
