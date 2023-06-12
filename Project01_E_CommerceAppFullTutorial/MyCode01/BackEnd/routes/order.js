const router = require('express').Router();
const Order = require('../models/Order');
const {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization
} = require('./verifyToken')

//CREATE

router.post('/', verifyToken, async (req, res) => {
    try {
        const newOrder = new Order(req.body)
        console.log('newOrder-BE-order.js-14', newOrder)
        const saveNewOrder = newOrder.save()
        return res
            .status(200)
            .json({
                success: true,
                message: 'New order is created successfully!-BE-order.js-20',
                newOrder
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-order.js-28',
                error
            })
    }
})

//UPDATED ORDER

router.put('/id', verifyTokenAndAdmin, async (req, res) => {

    try {
        const updateOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        return res
            .status(200)
            .json({
                success: true,
                message: 'The Order is updated successfully!-BE-order.js-50',
                updateOrder
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-order.js-58',
                error
            })
    }
})

//DELETE ORDER
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id)
        return res
            .status(200)
            .json({
                success: true,
                message: 'The Order is deleted successfully!-BE-order.js-72',
                deletedOrder
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-order.js-80',
                error
            })
    }
})

// GET USER ORDER
// router.get('/:userID', verifyTokenAndAuthorization, async (req, res) => {
//     try {
//         const getOrderUser = Order.find({userId: req.params.id})
//         return res
//             .status(200)
//             .json({
//                 success: true,
//                 message: 'Your Order is deleted successfully!-BE-order.js-94',
//                 getOrderUser
//             })
//     } catch (error) {
//         return res
//             .status(500)
//             .json({
//                 success: false,
//                 message: 'Something wrong of internal server!-BE-order.js-102',
//                 error
//             })
//     }
// })

//GET ALL ORDER
router.get('/all', verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        return res
            .status(200)
            .json({
                success: true,
                message: 'The Orders are all: !-BE-order.js-116',
                orders
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-order.js-117',
                error
            })
    }
})

//GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    console.log('lastMonth!-BE-order.js-135: ', lastMonth)
    console.log('previousMonth!-BE-order.js-136: ', previousMonth)

    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: {$gte: previousMonth}
                }
            },
            {
                $project: {
                    month: {$month: "$createdAt"},
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$sales"}
                },
            },
        ]);
        console.log('income!-BE-order.js-156: ', income)
        return res
            .status(200)
            .json({
                success: true,
                message: 'The GET MONTHLY are all: !-BE-order.js-161',
                income
            })
    } catch
        (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE-order.js-168',
                error
            })
    }
})

module.exports = router