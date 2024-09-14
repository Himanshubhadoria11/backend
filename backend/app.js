const express= require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const web = require('./routes/web')
const connectDb=require('./db/connectDb')
const fileUpload = require("express-fileupload");

//temp file uploader
app.use(fileUpload({useTempFiles: true}));


const cors= require('cors')
app.use(cors())

connectDb()


//for dataget in api
app.use(express.json())


//load route
app.use('/api',web)
//localhost:7000/api





//create server

app.listen(process.env.PORT,()=>{
    console.log(`server running on localhost: ${process.env.PORT}`)
})
