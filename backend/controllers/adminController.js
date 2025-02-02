import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
// API for adding doctor

const addDoctor=async (req,res)=>{
    try{

const {name,email,password,speciality,degree,experience,about,fees,address}=req.body
const imageFile=req.file 

// console.log({name,email,password,speciality,degree,experience,about,fees,address},imageFile)

if(!name||!email||!password ||!speciality||!degree||!experience||!about||!fees ||!address){
    return res.json({success:false,message:"Missing details"})
}

// validating email format

if(!validator.isEmail(email)){
    return res.json({success:false,message:"Please enter a valid email"})

}

// validating strong password

if(password.lenght<8){
    return res.json({success:false,message:"Please enter a strong password"})


}

// hashing doctor password
const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)

// upload image to cloudinary
const imageUpload=await cloudinary.uploader.upload(imageFile)


    } catch(error){
        
    }
}


export {addDoctor}