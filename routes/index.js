var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
//CONECTING DB// APP CONFI
mongoose.connect(
  "mongodb+srv://Khoa21donga:Khoa21dongaKhoa21dongaKhoa21donga@cluster0.o9ivn6p.mongodb.net/test2?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
//SCHEMA
let User4Schema = mongoose.Schema({
  IdDistrict: {
    type: String,
  },
  IdVillage: {
    type: String,
  },
  Address: {
    type: String,
  },
  BankName: {
    type: String,
  },
  BranchName: {
    type: String,
  },
});

let User4 = mongoose.model("User4", User4Schema);

/* GET home page. */
router.get("/", function (req, res, next) {
  User4.find({}, (error, data) => {
    console.log("danh sách User4", data);
    res.render("index", { User4s: data });
  });
});

// form-add
router.get("/form-add", function (req, res, next) {
  res.render("form-add", {});
});

router.post("/add", function (req, res, next) {
  User4.create(req.body);
  res.redirect("/");
});

router.get("/form-update/:id", function (req, res, next) {
  User4.findById(req.params.id, (Error, data) => {
    res.render("form-update", { User4: data });
  });
});

router.post("/update", function (req, res, next) {
  console.log("tri", req.body);
  User4.findByIdAndUpdate(req.body.id, req.body, (error, data) => {
    res.redirect("/");
  });
});

router.get("/form-delete/:id", function (req, res, next) {
  User4.findByIdAndDelete(req.params.id, (Error, data) => {
    res.redirect("/");
  });
});

module.exports = router;
