const express=require('express')
const database = require("../database");
const getAllTodoRoute=express.Router()
const getAllQuery=`SELECT * FROM todo`


getAllTodoRoute.get('/all',(req,res)=>{
    database.todoListDB.query(getAllQuery,(err,allTodo)=>{
        const finalTodoList=[...allTodo].map(item=>{
            item.status = item.status !== 0;
            return item
        })
        res.send({
            body:finalTodoList,
            status:200
        })
    })

})

getAllTodoRoute.get('/:id',(req,res)=>{
    const id=Number(req.params.id)
    if(id){
        const target=db.todo.filter(item=>item.id===id)[0]
        if(target){
            res.send({
                body:target,
                status:200
            })
        }else{

            res.send({
                status:404,
                message:'user not found!'
            })
        }


    }else{
        res.send({
            status:500,
            message:'missing required params : id'
        })
    }
})





module.exports=getAllTodoRoute
