
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})


userSchema.add({
    
    resetToken:{
        type:String,
        default:""
    }

})

module.exports=mongoose.model('users',userSchema);