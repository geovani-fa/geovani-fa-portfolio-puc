var express = require('express');
var router = express.Router();

const { MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'postcardsDB';
const collectionName = 'postcards';
const client = new MongoClient(url);

router.get('/:id',async function(req, res) {
    const postId = req.params.id;
  
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const postcard = await collection.findOne({_id: new ObjectId(postId)});
      
      if (!postcard){
        return res.status(404).json({error: 'Postcard not found.'});
      }
      res.render('edit', { postcard });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to read postcard data.'});
    }finally {
      await client.close();
    }
});
  
module.exports = router;