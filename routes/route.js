const express = require("express");
const route = express.Router();

const todoController = require("../controller/todo-controller");

route.get("/getAllTodo", todoController.getAllTodo);

route.post("/createTodo", todoController.createTodo);

route.patch("/updateTodo", todoController.updateTodo);

route.delete("/deleteTodo", todoController.deleteTodo);

module.exports = route;
