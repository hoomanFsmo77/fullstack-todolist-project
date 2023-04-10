

const mysql=require('mysql')
const todoListDB=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'todo-list'
})

const init = () => {
    todoListDB.connect((err)=>{
        if(err){return}
        console.log('database connected')
    })
}


module.exports={
    init,todoListDB
}