var express = require('express');
var router = express.Router();

const { MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'postcardsDB';
const collectionName = 'postcards';
const client = new MongoClient(url);

router.get('/', (req, res) => {
    res.render('add');
});

router.post('/', async (req, res) => {
    const { name, cidade, pais, descricao, imageUrl } = req.body;
    const newPostcard = {
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
        res.status(201).redirect('/');
    }catch (error){
        console.log(error);
        res.status(500).json({ error: 'Failed to add a new postcard.'});
    }finally {
        await client.close();
    }
});

module.exports = router;