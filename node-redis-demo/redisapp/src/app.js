import express from 'express';
import redis from 'redis'
const app = express();
const port = 8088;

//Connecting redis
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})

// default set zero
client.set('aprvisit', 0);
// create a redis data store(redis) -> client.set("allProducts", null);
// Default route
app.get('/',(req,res) => {
    // if the datastore(redis) allProducts is null
    //      fetch entire documents from mongodb
    //      send the res with the data from mongo db
    //      console.log('data from mongo db');
    //      set the allProduct data store(redis) to the data fetched from mongodb client.set("allProducts", data from mongo db);
    //else
    //      send the res with the data from redis
    //      console.log('data from redis')

    client.get('aprvisit', (err,aprvisit )=> {
        res.send('Number of visit is'+aprvisit);
        client.set('aprvisit', parseInt(aprvisit)+1)
    }) 
})

app.listen(port,() => {
    console.log('app is running on port'+ port)
})