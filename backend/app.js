const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const todoROuter = require("./routes/todo");

const app = express();

const port = 3010;

app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/todo", todoROuter);

app.get("/", (req, res) => {
  res.send("Hello, Express✨");
});

app.listen(port, () => {
  console.log(`Server listening on port : ${port} 💎`);
});
