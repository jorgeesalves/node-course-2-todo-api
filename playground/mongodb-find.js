//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err) {

        return console.log('Unable to connect to MongoDB server.');

    }

    console.log('Connected to MongoDB server.');

    /*db.collection('Todos').find({
        _id: new ObjectID('5c4887b7c50fc7f7dc7e493f')
    }).toArray().then((docs) => {

        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 4));

    }, (err) => {

        console.log('Unable to fetch todos', err);

    });*/

    /*db.collection('Todos').find().count().then((count) => {

        console.log(`Todos count: ${count}.`);

    }, (err) => {

        console.log('Unable to fetch todos', err);

    });*/

    db.collection('Users').find({
        name: 'Jorge'
    }).toArray().then((docs) => {

        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 4));

    }, (err) => {

        console.log('Unable to fetch todos', err);

    });

    //db.close();

});