require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/connection");

connectDB();
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
