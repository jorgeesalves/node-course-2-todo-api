const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

/*Todo.remove({}).then(result => {

    console.log(result);

}).catch(e => console.log(e));*/

Todo.findOneAndRemove({
    _id: '5c4ae85a553b966f0956a09d'
}).then(todo => {

    console.log(todo);

}).catch(e => console.log(e));

Todo.findByIdAndRemove('5c4ae85a553b966f0956a09d').then(todo => {

    console.log(todo);

}).catch(e => console.log(e));