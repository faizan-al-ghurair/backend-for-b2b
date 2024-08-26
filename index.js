const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/Users");
const transporter = require("./mailer");

// const db =
// mongodb+srv://faizanmuzaffarshaikh:<db_password>@userforb2b.oyts2.mongodb.net/

const mongodbOptions = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
  dbName: "users",
};

const app = express();
app.use(express.json());
app.post("/get-user", async (req, res) => {
  await Users.create(req.body);

  await transporter.sendMail({
    from: "Faizan Shaikh<fshaikhapple@outlook.com>",
    to: "faizanmuzaffarshaikh@gmail.com",
    subject: "New user entery", // Subject line
    text: JSON.stringify(req.body, null, 2), // html body
  });

  return res.status(201).json({
    message: "success",
  });
});

async function init() {
  await mongoose.connect(process.env.MONGO_URI, mongodbOptions);

  app.listen(process.env.PORT, () => {
    console.log("server running on port:", process.env.PORT);
  });
}
init().catch(console.error);
