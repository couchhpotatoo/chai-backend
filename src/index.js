//equire('dotenv').config()


import dotenv from "dotenv"
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
 

dotenv.config({path:"./env"})
import connectDB from "./db/index.js"

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000),()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`)
    }
})
.catch((err)=>{

    console.log("Error connecting to database",err  )
})

/*
;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) 
    } catch (error) {
        console.log("ERROR",error)
    }
 })() */
