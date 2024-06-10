var express = require('express');
var router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const postcardsPath = './postcards.json';
const {} = require('../controller/postcards');

// Rota GET para obter todos os Postcards
router.get('/', (req, res) => {
  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read postcards data.' });
    }
  
    const postcards = JSON.parse(data);
    res.json(postcards);
  });
});

// Rota GET para obter um Postcard
router.get('/:id', (req, res) =>{
  const postId = req.params.id;

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    const postcard = postcards.find((post) => post.id === postId);

    if (!postcard) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    res.json(postcard);
  });
});

//Rota POST para adc um novo Postcard
router.post('/', (req, res) => {
  const { name, cidade, pais, descricao, imageUrl } = req.body;
  //const imageUrl = `https://picsum.photos/400/300`; // Gerador automático de imagens

  const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
  };

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    postcards.push(newPostcard);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to add new postcard.' });
      }

      res.status(201).json(newPostcard);
    });
  });
});

//Rota DELETE
router.delete('/:id', (req, res) =>{
  const { id } = req.params;

  fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if (postcardIndex === -1) {
      return res.status(404).json({ error: 'Postcard not found.' });
    }

    postcards = postcards.filter((item) => item.id !== id);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete postcard.' });
      }

      res.status(204).end();
    });
  });
})

module.exports = router;
