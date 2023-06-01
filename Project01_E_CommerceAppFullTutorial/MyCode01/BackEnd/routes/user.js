// Test
//
// const router = require('express').Router();
// router.get('/usertest', (req,res)=>{
//     res.send('user test is successful')
// });
//
// router.post('/userposttest', (req,res)=>{
//     const username = req.body.username;
//     res.send('BE-test username: ' + username);
// })
//
// module.exports = router;

const verifyToken = require("./verifyToken");
const {verifyTokenAndAuthorization} = require("./verifyToken");
const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User')
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    console.log('req.body.password-BE-user.js-21: ', req.body.password)
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
        console.log('req.body.password -BE-user.js-27: ', req.body.password)
    }
    try {
        console.log('req.params.id-BE-user.js-30: ', req.params.id)
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {new: true}
        )
        console.log('updatedUser-BE-user.js-38: ', updatedUser)
        return res
            .status(200)
            .json({
                success: true,
                message: 'Updated user successfully-user.js-35',
                updatedUser
            })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error internal server _BE_Updated user-user.js-41',
            error
        })
    }
})

module.exports = router;