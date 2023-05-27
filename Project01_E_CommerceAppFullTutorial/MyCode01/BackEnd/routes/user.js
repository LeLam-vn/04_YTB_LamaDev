
//Test


// router.post('/userposttest', (req,res)=>{
//     const username = req.body.username;
//     res.send('BE-test username: ' + username);
// })

const router = require('express').Router();
router.get('/usertest', (req,res)=>{
    res.send('user test is successfull')
});



module.exports = router;