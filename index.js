require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/sqlConnection");
const { auth, authroutes } = require("./src/routes/auth.route");
const jwtVerify = require("./src/middelware/jwtVerify");

const app = express();

app.use(express.json());
const PORT = process.env.PORT;

console.log("port", PORT);

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected", sequelize.config.database);
  })
  .catch((error) => console.log(error));

app.use(authroutes);
app.use(jwtVerify);
//server lisning on
app.listen(PORT, () => {
  console.log(`server running  on port-${PORT}`);
});
