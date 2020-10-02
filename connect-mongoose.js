const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://danh:hanhphucao@clusterblog-sbxju.mongodb.net/todo?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("connect to mongoose faild");
    } else {
      console.log("connect success");
    }
  }
);
