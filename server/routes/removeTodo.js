const express=require('express')
const db=require('../database')
const removeTodoRoute=express.Router()

removeTodoRoute.delete('/remove/:id',(req,res)=>{
    const id=Number(req.params.id)
    if(id){
        db.todo.splice(db.todo.findIndex(item=>item.id===id),1)
        res.send({
            message:`todo id : ${id} removed`,
            status:200
        })
    }else{
        res.send({
            status:500,
            message:'missing or invalid required params : id'
        })
    }


})






module.exports=removeTodoRoute