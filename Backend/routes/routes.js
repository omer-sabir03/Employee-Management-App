const express = require("express");
const router = express.Router();
const empModel = require("../Models/empModel");
const ObjId = require("mongoose").Types.ObjectId;

//GetApi
router.get("/", (req, res) => {
  empModel.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in Get Api" + err);
    }
  });
});

//Get Single emp
router.get("/:_id", (req, res) => {
  if (ObjId.isValid(req.params._id)) {
    empModel.findById(req.params._id, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(err);
      }
    });
  } else {
    res.status(400).send("No data found" + req.params._id);
  }
});
//Post Api

router.post("/", (req, res) => {
  const newEmp = new empModel({
    Name: req.body.Name,
    Designation: req.body.Designation,
    Address: req.body.Address,
  });

  newEmp.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error Occured in Post Api " + err);
    }
  });
});

// Delete Api

router.delete("/:_id", (req, res) => {
  if (ObjId.isValid(req.params._id)) {
    empModel.findByIdAndRemove(req.params._id, (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log("Err" + err);
      }
    });
  }
});

router.put("/:_id", (req, res) => {
  if (ObjId.isValid(req.params._id)) {
    let emp = {
      Name: req.body.Name,
      Designation: req.body.Designation,
      Address: req.body.Address,
    };
    empModel.findByIdAndUpdate(
      req.params._id,
      { $set: emp },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log(err);
        } else {
          res.send(doc);
        }
      }
    );
  } else {
    res.status(400).send("No data found" + req.params._id);
  }
});

module.exports = router;
