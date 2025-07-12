 import mongoose ,{Schema} from 'mongoose'
import { type } from 'os'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
 const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        
        lowercase:true,
        trim:true
    },
    avatar:{
type:String,
required:true
    },
    coverimage:{
        type:String
    },
    watchHistory:[{
        type:Schema.Types.ObjectId,
        ref:"video"
    }],
    password:{
        type:String,
        required:true,
    },
    refreshtoken:{
        type:String
    }
 },

{
    timestamps:true
})
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
this.password=bcrypt.hash(this.password,10)
next()
    }
}
)
userSchema.methods.isPasswordCorrect=async function (password){
   return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=async function (){
   return  jwt.sign({
        _id:this.id,
        email:this.email,
        username:this.username,
        fullname:this.fullname,
    },
process.env.ACCESS_TOKEN_SECRET,
{
    expiresIn:process.env.ACCESS_TOKEN_SECRET
})
}
userSchema.methods.generateRefreshToken=async function (){
    return  jwt.sign({
        _id:this.id,
       
    },
process.env.REFRESH_TOKEN_SECRET,
{
    expiresIn:process.env.REFRESH_TOKEN_SECRET
})
}

 export const user=mongoose.model("User",userSchema)