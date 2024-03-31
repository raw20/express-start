import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use(router); // router 미들웨어 사용 후 app.use()로 지정해줘야함

app.use(express.json());
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("server start... http://localhost:3000");
});
