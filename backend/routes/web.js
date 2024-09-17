const express = require('express')
const UserController = require('../controller/UserController')
const route = express.Router()

//usercontroller
route.get('/getalluser',UserController.getalluser)
route.post('/userinsert',UserController.userinsert)
route.get('/userview/:id',UserController.viewuser)
route.post('/userupdate/:id',UserController.updateuser)
route.delete('/userdelete/:id',UserController.deleteuser)








module.exports = route;