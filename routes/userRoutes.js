import express from "express";

const app = express();

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("User List Page");
  })
  .post((req, res) => {
    console.log(req.body);
    res.send("Create User");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`${req.params.id} user의 정보`);
  })
  .put((req, res) => {
    res.send(`${req.params.id}번 유저를 Update`);
  })
  .delete((req, res) => {
    res.send(`${req.params.id}번 유저를 Delete`);
  });

export default router;
