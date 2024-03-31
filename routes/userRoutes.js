import express from "express";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("User List Page");
  })
  .post((req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.send("필수 값이 입력되지 않았습니다.");
    }
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
