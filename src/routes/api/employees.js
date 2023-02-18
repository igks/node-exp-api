const express = require("express");

const router = express.Router();

const Employee = require("../../models/employee");

router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const employees = await Employee.findById(id);
    res.json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newEmployee = new Employee({
      name: req.body.name,
      job: req.body.job,
    });

    const employee = await newEmployee.save();
    res.json(employee);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Employee.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        job: req.body.job,
      },
      function (err, doc) {
        if (!err) {
          res.json(doc);
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
