const jwt=require('jsonwebtoken')
let JWT_SECRET="heaven"
const checkToken=(req,res,next)=>{

    let token=req.headers.authorization;
    // console.log(token)

    try {
        let decode=jwt.verify(token,JWT_SECRET)
        req.user=decode
        next()
    } catch (error) {
        // console.log("invalid token")
        return res.json({msg:"invalid token"})
    }
}

module.exports=checkToken