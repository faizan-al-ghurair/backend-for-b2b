const express = require("express");
const mongoose = require("mongoose");
const Users = require("./models/Users");

// const db =
// mongodb+srv://faizanmuzaffarshaikh:<db_password>@userforb2b.oyts2.mongodb.net/

const mongodbOptions = {
  user: "faizanmuzaffarshaikh",
  pass: "bUBcGyuAoMfwZEKY",
  dbName: "users",
};

const app = express();
app.use(express.json());
app.post("/get-user", async (req, res) => {
  await Users.create(req.body);
  return res.status(201).json({
    message: "success",
  });
});

async function init() {
  await mongoose.connect(
    "mongodb+srv://userforb2b.oyts2.mongodb.net/",
    mongodbOptions
  );

  app.listen(process.env.PORT, () => {
    console.log("server running on port:", process.env.PORT);
  });
}
init().catch(console.error);
// export default mongoose.connect(config.MONGO_URI, mongodbOptions);
