const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');


//REGISTER
//@Route api/auth/register
//@Desc: register new user
//@route publish
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    try {
        const savedUser = await newUser.save();
        console.log(savedUser)
        return res
            .status(201)
            .json({
                success: true,
                message: 'BE_Register_Register is successful!!! Welcome: ',
                savedUser
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                    success: false,
                    message: 'BE_Register_Error: ', error
                }
            )
    }
})

//LOGIN
//@Route api/auth/login
//@Desc: login an user
//@route publish

router.post('/login', async (req, res) => {
    const {username, password} = req.body
    if(!username||!password){
        return res.status(401).json({
            success: false,
            message: 'Wrong Credentials-not found username and/or password'
        })
    }
    try {
        const userLogin = await User.findOne({username: req.body.username});
        !userLogin && res.status(401).json({
            success: false,
            message: 'Wrong Credentials-not found username'
        })

        const hashedPassword = CryptoJS.AES.decrypt(
            userLogin.password,
            process.env.PASS_SEC
        )
        console.log(hashedPassword)
        const password_database = hashedPassword.toString(CryptoJS.enc.Utf8);
        console.log('password_database: ', password_database)
        password_database !== req.body.password && res.status(401).json({
            success: false,
            message: 'Wrong Credentials-password is not exactly'
        });
        const {password,...others} = userLogin._doc
        return res
            .status(201)
            .json({
                success: true,
                message: 'Welcome user: ',
                userLogin,
                others
            })
    } catch
        (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'BE-LOGIN-Login has error!!!',
                error
            })
    }
})

module.exports = router;