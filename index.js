require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require("./src/config/sqlConnection");
const { authroutes } = require("./src/routes/auth.route");

app.use(express.json());
const PORT = process.env.PORT;

console.log("Port++", PORT);

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected", sequelize.config.database);
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("test")
  res.send("Working");
});
app.use(authroutes);
//server lisning on
app.listen(PORT, () => {
  console.log(`server running  on port-${PORT}`);
});
