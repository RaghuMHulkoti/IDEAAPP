const express = require("express");
var router=require('./routes/idea.route');


const app = express();
app.use(express.json());
app.use('/api/v1/users',router);

app.listen(8000, () => {
  console.log("listening on port number: " + 8000);
});
