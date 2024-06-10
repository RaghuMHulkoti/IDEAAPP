const idea_controllers = require("../controllers/idea.controller");
var express=require("express");
var router=express.Router();

  router.get("/data", idea_controllers.getalldata);
  router.get("/data/:id", idea_controllers.getdatabasedonid);
  router.post("/datas", idea_controllers.createdata);
  router.put("/datas/:id", idea_controllers.Update);
  router.delete("datas/:id", idea_controllers.deletedata);

module.exports =router;