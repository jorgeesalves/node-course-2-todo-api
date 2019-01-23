//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

    if(err) {

        return console.log('Unable to connect to MongoDB server.');

    }

    console.log('Connected to MongoDB server.');

    
    /*db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c48914fc50fc7f7dc7e4aaf')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {

        console.log(result);

    });*/

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c488bf6c50fc7f7dc7e49f6')
    }, {
        $set: {
            name: 'Isabel'
        },
        $inc: {
            age: -5
        }
    }, {
        returnOriginal: false
    }).then((result) => {

        console.log(result);

    });

    //db.close();

});