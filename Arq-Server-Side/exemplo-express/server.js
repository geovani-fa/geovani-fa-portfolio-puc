const express = require("express");

const app = express();
const port = 5002;

// Rota principal que responde com "Olá mundo | EXPRESS"
app.get('/', (req, res) => {
  res.send('Olá Mundo! | EXPRESS');
});

// Rota secundária
app.get('/rota2', (req, res) => {
    let numRota = req.query.numRota
    res.send('Olá Mundo-'+numRota+'! | EXPRESS');
  });

//Rota para teste nodemon
app.get('/geovani', (req, res) => {
  let numRota = req.query.numRota
  res.send('Olá Geovani! | EXPRESS');
});  

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});