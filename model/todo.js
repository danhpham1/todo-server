const mongoose = require("mongoose");

const TodoModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todos", TodoModel);
