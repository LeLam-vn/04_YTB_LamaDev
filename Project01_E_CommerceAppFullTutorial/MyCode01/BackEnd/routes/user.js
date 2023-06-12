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
const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User')

//UPDATE USER
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

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if (!deletedUser) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: 'Deleted User is false!!!-BE-user.js-64'
                })
        }
        return res
            .status(200)
            .json({
                success: true,
                message: 'Deleted User successfully!!!-BE-user.js-71',
                deletedUser
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Error Internal Internet!!!-BE-user.js-79'
            })
    }
})

// GET USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const findUser = await User.findById(req.params.id)

        if (!findUser) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: 'User is not exist, please try again!!!-BE-user.js-93',
                })
        }
        const {password, ...others} = findUser._doc
        return res
            .status(200)
            .json({
                success: true,
                message: 'Your User find -BE-user.js-100: ',
                findUser,
                others
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Error Internal Internet!!!-BE-user.js-108'
            })
    }
})

// GET All USER
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const findAllUser = query ? await User.find().sort({id: -1}).limit(3) : await User.find()
        if (!findAllUser) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: 'User is not exist, please try again!!!-BE-user.js-93',
                })
        }
        // const {password, ...others} = findAllUser._doc
        return res
            .status(200)
            .json({
                success: true,
                message: 'Your All User find -BE-user.js-133: ',
                findAllUser,
                // others
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Error Internal Internet!!!-BE-user.js-108'
            })
    }
})

//GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.getFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            {
                $match: {
                    createdAt: {$gte: lastYear}
                },
            },
            {
                $project: {
                    month: {$month: '$createdAt'},
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: {$sum: 1}
                }
            }
        ])
        return res.status(200).json(data)
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Error Internal Internet!!!-BE-user.js-160'
            })
    }

})

module.exports = router;