//equire('dotenv').config()


import dotenv from "dotenv"
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
 

dotenv.config({path:"./env"})
import connectDB from "./db/index.js"

connectDB()

/*
;(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) 
    } catch (error) {
        console.log("ERROR",error)
    }
 })() */
