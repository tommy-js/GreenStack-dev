const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./Schema");

const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://testing_user:password_tester1@cluster0.n8lzc.mongodb.net/cluster0?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("Connected to the Atlas server");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening to port 4000");
});
