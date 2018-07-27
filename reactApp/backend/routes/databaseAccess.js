const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem')

router.post('/add', (req, res) => {
  var task = req.body.taskText;
  const testTodo = new TodoItem({
  task: task
});

testTodo.save()
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  })
});

module.exports = router;
