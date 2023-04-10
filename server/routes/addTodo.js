const express=require('express')
const database=require('../database')
const addTodoRoute=express.Router()


addTodoRoute.post('/add',(req,res)=>{
    if(req.body.content && typeof req.body.status==='boolean'){
        const newTodo={
            content:req.body.content,
            status:req.body.status
        }
        const addQuery=`INSERT INTO todo VALUES(NULL,"${req.body.content}",${req.body.status ? 1 : 0})`
        database.todoListDB.query(addQuery,(error,response)=>{
            console.log(response,error)
            if(error){
                res.send({
                    error:true,
                    msg:'database error'
                })
            }
            res.send({
                status:200,
                message:'todo added!'
            })
        })
    }else{
        res.send({
            status:501,
            message:'missing required content or status'
        })
    }
})




module.exports=addTodoRoute