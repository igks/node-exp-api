const mongoose = require("mongoose");

// define the schema
const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("employee", EmployeeSchema);
