const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskSchema=require('./taskSchema');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://User1:KirtiTanwani@jslecturecluster.0ny99.mongodb.net/todolist')
.then(() => {


//GetByUser
app.get('/tasks/:user',async (req,res)=>{
    const ans = await taskSchema.findOne({username:req.params.user});
    console.log(ans);
    res.send(ans);
});

//Create
app.post('/tasks',async (req,res)=>{
    stu = new taskSchema({...req.body});
    const ans = await stu.save();
    console.log(ans);
    res.send(ans);
});

//Delete
app.delete('/tasks/:user',async (req,res)=>{
    const ans = await taskSchema.deleteOne({username:req.params.user});
    res.send(ans);
});

//Update
app.patch('/tasks/:user',async (req,res)=>{
    const stu = await taskSchema.findOne({username:req.params.user});
    stu.name = req.body.name;
    const ans = await stu.save();
    res.send(ans);
});

  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


}



)
.catch(err => console.error('MongoDB connection error:', err.message));



 


