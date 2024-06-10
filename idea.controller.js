const data = require("../models/idea.model");
let id=3;

exports.getalldata = (req, res) => {
  res.status(200).send(data);
};
// GET 127.0.0.1:8000/IDEAAPP/api/v1/data/:id/
exports.getdatabasedonid = (req, res) => {
  data_id = req.params.id;
  if (data[data_id]) {
    res.status(200).send(data[data_id]);
  } else {
    res.status(404).send({ message: "Invalid id" });
  }
};
exports.createdata = (req, res) => {
    data_obj=req.body;
    id++;
    data_obj["id"] = id;
    data[id]=data_obj;
    res.status(201).send(data_obj)
}
exports.Update=(req,res) => {
  idea_id = req.params.id;
  if(data[idea_id]){
    data_obj=req.body;
    data[idea_id]=data_obj;
    res.status(200).send(data_obj);
  }else{
    res.status(404).send({
      message: 'enter id data is not found'
    })
  }
};
exports.deletedata=(req,res) => {
idea_id = req.params.id;
if(data[idea_id]){
  delete data[idea_id];
  res.status(200).send({
    message: 'deleted'
  });
}
else{
  res.status(404).send({
    message: 'not found'
  })
}
}
