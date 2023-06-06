const router = require('express').Router();
const Cart = require('../models/Cart')
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization
} = require('./verifyToken');

//CREATE CART
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    console.log('newCart-BE-cart.js-13: ', newCart)
    try {
        const savedCart = await newCart.save();
        return res
            .status(200)
            .json({
                success: true,
                message: 'Cart is have some item!-BE-cart.js-20',
                savedCart
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-cart.js-20',
                error
            })
    }
})

//UPDATE CART
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        )
        return res
            .status(200)
            .json({
                success: true,
                message: 'Cart is updated successfully!-BE-cart.js-47',
                updatedCart
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-cart.js-42',
                error
            })
    }
})

//DELETE CART

router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const deleteCart = await Cart.findByIdAndDelete(req.params.id)
        return res
            .status(200)
            .json({
                success: true,
                message: 'Cart is deleted successfully!-BE-cart.js-70',
                deleteCart
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-cart.js-71',
                error
            })
    }
})

//FIND USER CART

router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.find({userId: req.params.userId})
        return res
            .status(200)
            .json({
                success: true,
                message: 'Your Cart: !-BE-cart.js-70',
                cart
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-cart.js-101',
                error
            })
    }
})

//GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        return res
            .status(200)
            .json({
                success: true,
                message: 'Total Carts: !-BE-cart.js-115',
                carts
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-cart.js-123',
                error
            })
    }
})

module.exports = router