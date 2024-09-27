const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    file:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    // likes:{
    //     type:String
    // },
    // comments:{
    //     type:String
    // }
})

postSchema.add({
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'users'
        }
    ],

    comments:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"users" 
            },
            text:{
                type:String
            },
            // visibility:{
            //     type:String,
            //     default:"visible"
            // }
        }
    ]
})

module.exports=mongoose.model('posts',postSchema)