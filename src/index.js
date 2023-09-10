const app = require("express")()

const PORT = 3001

app.get("/", (req, res)=>{
  res.send(new Date())
})

app.listen(PORT, ()=>{
  console.log("> Running at port: ", PORT)
})