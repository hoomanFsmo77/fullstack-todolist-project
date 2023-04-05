const express=require('express')
const updateTodoRoute=express.Router()
const db=require('../database')
updateTodoRoute.put('/update/:id',(req,res)=>{
    const id=Number(req.params.id)
    if(id){
        const targetIndex=db.todo.findIndex(item=>item.id===id)
        if(targetIndex<0){
            res.send({
                status:404,
                message:'user not found'
            })
        }else{
            if(req.body.content && typeof req.body.status==='boolean'){
                db.todo[targetIndex].content=req.body.content
                db.todo[targetIndex].status=req.body.status
                res.send({
                    status:200,
                    message:'user updated'
                })
            }else{
                res.send({
                    status:500,
                    message:'missing required body : content or status'
                })
            }
        }
    }else{
        res.send({
            status:500,
            message:'missing or invalid required params : id'
        })
    }

})





module.exports=updateTodoRoute