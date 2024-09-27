const express=require('express');
const { createPost, deletePost, updatePost, getAllUserPost, getSingleUserPost, updateLike, addComment, getSinglePostComments, deleteComment } = require('../controllers/postController');
const router= express.Router();
const checkToken=require('../middleware/checkToken');

router.post('/create',checkToken,createPost);
router.delete('/delete/:_id',deletePost);
router.put('/update/:_id',updatePost);
router.get('/getall',getAllUserPost);
router.get('/getSingleUser',checkToken,getSingleUserPost);
router.put('/updatelike/:postId',checkToken,updateLike);
router.post('/addComment/:postId',checkToken,addComment)
router.delete('/deletecomment/:postId/:commentId',deleteComment)
// router.get('/getcomments/:postId',getSinglePostComments)

module.exports=router