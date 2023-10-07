const express = require("express")
const app = express();
const PORT = 8080;
const users = require("./MOCK_DATA.json");

//Routes

app.get("/users",(req,res)=>{
    //For hybrid server we can use /api for mobile users to
    const html = `<ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html);
})


app.get("/api/users",(req,res)=>{
    return res.json(users);
})
app.get("/api/users/:id",(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=> user.id === id);
    return res.json(user);
})
app.post("/api.users",(req,res)=>{
    return res.json({status:"pending"})
});
app.patch('/api/users/:id',(req,res)=>{
    //here we can edit the user with the help of id
    return res.json({status:"pending"});
});
app.delete('/api/users/:id',(req,res)=>{
    //here we can delete the user with the help of id
    return res.json({status:"pending"});
});

app.listen(8080,()=>{
    console.log("server is working")
})

// app.route("/api/users/:id").get((req,res)=>{
//     app.get("/api/users",(req,res)=>{
//         return res.json(users);
//     })
//     app.get("/api/users/:id",(req,res)=>{
//         const id = req.params.id;
//         const user = users.find((user)=> user.id === id);
//         return res.json(user);
//     })

// }).put((res,res)=>{
//     //edit user with  id
//     res.json({status:"pending"});
// }).delete((res,res)=>{
//     //delete user with  id
//     res.join({status:"pending"});
// })
