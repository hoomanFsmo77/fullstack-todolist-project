const express=require('express')
const db=require('../database')
const getAllTodoRoute=express.Router()

getAllTodoRoute.get('/all',(req,res)=>{
    res.send({
        body:db.todo,
        status:200
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
