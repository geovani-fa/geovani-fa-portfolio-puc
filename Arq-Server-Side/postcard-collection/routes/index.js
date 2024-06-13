var express = require('express');
var router = express.Router();

const { MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'postcardsDB';
const collectionName = 'postcards';
const client = new MongoClient(url);
/* GET home page. */
router.get('/',async function(req, res) {
  //Versão sem view
  //res.render('index', { title: 'Postcard Collection' });
  
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const postcards = await collection.find().toArray();
    res.render('index', { postcards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add a new postcard.'});
  }finally {
    await client.close();
  }
});

module.exports = router;
