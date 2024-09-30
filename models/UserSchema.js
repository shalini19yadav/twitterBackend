
const mongoose=require('mongoose');
const validator=require('validator')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator: function(value){
                return validator.isEmail(value);
            },
            message: props =>`${props.value} is not a valid email`
        }
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