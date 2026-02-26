//express require
const express = require("express")//express module
//create object of express
const app = express()

// API creation

//http://localhost:3333/test
app.get("/test", (req, res) => {
  console.log("testApi is called")
  res.send(" test Api is called.")
});

//http://localhost:3333/user
const user = {
  id: 1,
  Name: "zoro",
  age: 21,
  salary: 5000,
};
app.get("/user", (req, res) => {

  res.json({
    message: "user",
    data: user,
  });
});
//http://localhost:3333/users
const users = [
  { id: 1, Name: "zoro", age: 21, salary: 5000, },
  { id: 2, Name: "luffy", age: 21, salary: 5000, },
  { id: 3, Name: "sanji", age: 20, salary: 5000, },
  { id: 4, Name: "peter", age: 25, salary: 5000, },
  { id: 5, Name: "gwen", age: 25, salary: 5000, },
]

app.get("/users", (req, res) => {
  res.json({
    message: "users",
    data: users,
  })
})
//

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  if (user) {
    res.send({ message: "user is found", data: user })
  } else {
    res.send({ message: `user with id ${id} is not found` })
  }
})
// server creation
const PORT = 3333
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`)
}
)