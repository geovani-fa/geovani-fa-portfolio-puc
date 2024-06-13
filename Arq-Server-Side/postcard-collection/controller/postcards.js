const fs = require('fs');
const postcardsPath = './postcards.json';
const { v4: uuidv4 } = require('uuid');
const { MongoClient, ObjectId} = require('mongodb');
//docker run -d -p 27017:27017 --name=mongo-example mongo:latest
const url = 'mongodb://localhost:27017';
const dbName = 'postcardsDB';
const collectionName = 'postcards';
const client = new MongoClient(url);

function listAll(res){
    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }
      
        const postcards = JSON.parse(data);
        res.json(postcards);
    });
}

function listOne(postId,res){

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
}

function add(res, req){
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
}

function remove(res, id){

    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if(postcardIndex === -1) {
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
}

async function listAllMongo(res){
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const postcards = await collection.find().toArray();
        res.status(201).json(postcards);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add a new postcard.'});
    }finally {
        await client.close();
    }
}

async function listOneMongo(postId,res){

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
}

async function addMongo(res,req){
    const { name, cidade, pais, descricao, imageUrl } = req.body;
  
    const newPostcard = {
      id: uuidv4(),
      name,
      cidade,
      pais,
      descricao,
      imageUrl,
    };
    
    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(newPostcard);
        newPostcard._id = result.insertedId;
        res.status(201).json(newPostcard);
    }catch (error){
        console.log(error);
        res.status(500).json({ error: 'Failed to add a new postcard.'});
    }finally {
        await client.close();
    }
}

async function removeMongo(res, id){

    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if(postcardIndex === -1) {
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
}

exports.listAll = listAll;
exports.listOne = listOne;
exports.add = add;
exports.remove = remove;
//Funcoes banco
exports.listAllMongo = listAllMongo;
exports.listOneMongo = listOneMongo;
exports.addMongo = addMongo;
exports.removeMongo = removeMongo;