const express=require('express')
const updateTodoRoute=express.Router()
const database=require('../database')
updateTodoRoute.put('/update/:id',(req,res)=>{
    const id=Number(req.params.id)
    if(id && req.body.content && typeof req.body.status==='boolean'){
        const updateQuery=`UPDATE todo SET content="${req.body.content}",status=${req.body.status ? 1 : 0} WHERE id=${id}`
        console.log(updateQuery)
        database.todoListDB.query(updateQuery,(err,response)=>{
            if(err){
                res.send({
                    error:true,
                    msg:'database eror'
                })
            }else{
                res.send('user updated')
            }
        })
    }else{
        res.send({
            status:500,
            message:'missing or invalid required params : id'
        })
    }

})





module.exports=updateTodoRoute