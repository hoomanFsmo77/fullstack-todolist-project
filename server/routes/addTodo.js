const express=require('express')
const db=require('../database')
const addTodoRoute=express.Router()

addTodoRoute.post('/add',(req,res)=>{
    if(req.body.content && typeof req.body.status==='boolean'){
        const newTodo={
            id:db.todo.length+1,
            content:req.body.content,
            status:req.body.status
        }

        db.todo.push(newTodo)
        res.send({
            status:200,
            message:'todo added!'
        })
    }else{
        res.send({
            status:501,
            message:'missing required content or status'
        })
    }
})




module.exports=addTodoRoute