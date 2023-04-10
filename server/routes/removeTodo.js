const express=require('express')
const database=require('../database')
const removeTodoRoute=express.Router()

removeTodoRoute.delete('/remove/:id',(req,res)=>{
    const id=Number(req.params.id)
    if(id){
        const removeQuery=`DELETE FROM todo WHERE id=${id}`
        database.todoListDB.query(removeQuery,(err,response)=>{
            if(err){
                res.send({
                    error:true,
                    msg:'database error'
                })
            }
            res.send({
                message:`todo id : ${id} removed`,
                status:200
            })
        })
    }else{
        res.send({
            status:500,
            message:'missing or invalid required params : id'
        })
    }


})






module.exports=removeTodoRoute