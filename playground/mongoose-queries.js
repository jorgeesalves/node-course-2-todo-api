const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//let todoId = '5c49e46f2d5a59c83123eb5b';
let userId = '5c48afc81dd3e4642760df96';

/*if(!ObjectID.isValid(todoId)) {

    console.log('Todo ID not valid');

}*/

/*Todo.find({
    _id: todoId
}).then((todos) => {

    console.log('Todos: ', todos);

});

Todo.findOne({
    _id: todoId
}).then((todo) => {

    console.log('Todo: ', todo);

});*/

/*Todo.findById(todoId).then((todo) => {

    if(!todo) {

        return console.log('Todo ID not found');

    }

    console.log('Todo by Id: ', todo);

}).catch(e => console.log(e));*/

User.findById(userId).then((user) => {

    if(!user) {

        return console.log('User ID not found');

    }

    console.log('User by ID: ', user);

}).catch(e => console.log(e));