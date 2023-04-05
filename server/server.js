const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
//// routes
const getAllTodoRoute=require('./routes/getAllTodo')
const addTodoRoute=require('./routes/addTodo')
const removeTodoRoute=require('./routes/removeTodo')
const updateTodoRoute=require('./routes/updateTodo')

const app=express()
app.use(bodyParser.json())
app.use(cors())


app.use('/api/todo',getAllTodoRoute)
app.use('/api/todo',addTodoRoute)
app.use('/api/todo',removeTodoRoute)
app.use('/api/todo',updateTodoRoute)


app.listen(9001,()=>console.log('server is running on port 9001'))
