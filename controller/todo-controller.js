const Todo = require("../model/todo");

module.exports.getAllTodo = (req, res) => {
  Todo.find((err, todoData) => {
    if (err) {
      res.json({ ms: "Not get data" });
    }
    res.json({ todo: todoData });
  });
};

module.exports.createTodo = (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    let todo = new Todo({
      name: req.body.name,
    });
    todo.save((err, rs) => {
      if (err) {
        res.json({
          ms: "Name has duplicated",
        });
      } else {
        res.json({
          data: rs,
        });
      }
    });
  } else {
    res.json({ ms: "Please Input Name Field" });
  }
};

module.exports.updateTodo = (req, res) => {
  // console.log(req.body);
  Todo.update(
    { _id: req.body._id },
    { $set: { name: req.body.name, complete: req.body.complete } },
    { new: true },
    (err) => {
      if (err) {
        res.json({ msg: "update failed", result: 0 });
      } else {
        res.json({ msg: "updated success", result: 1 });
      }
    }
  );
};

module.exports.deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.body._id }, (err) => {
    if (err) {
      res.json({ result: 0 });
    } else {
      res.json({ result: 1 });
    }
  });
};
