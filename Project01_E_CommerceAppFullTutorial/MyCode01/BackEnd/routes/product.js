const router = require('express').Router();
const Product = require('../models/Product')
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require('./verifyToken')


//TEST
// router.get('/test',  (req,res)=>{
//     return res
//         .status(200)
//         .json({
//             success: true,
//             message:'Test Connect successful ProductRouter!'
//         })
// })

//CREATE NEW PRODUCT
router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newProduct = await new Product(req.body)
    const {title, desc, img, categories, size, color, price} = req.body
    console.log('titleBE-product.js-18:', title)
    if (!title || !desc || !img || !price) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'You missed something about product, Please check again-BE-product.js-23'
            })
    }
    try {
        const savedProduct = await newProduct.save()
        console.log('savedProduct-BE-product.js-29: ', savedProduct)
        return res
            .status(200)
            .json({
                success: true,
                message: 'A new product is create in your store!-BE- product.js-33',
                newProduct
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE- product.js-33',
                error
            })
    }
})

//UPDATE PRODUCT
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                {
                    new: true
                }
            )
            if (!updatedProduct) {
                console.log('req.params.id-BE-product.js-73: ', req.params.id)
                console.log('req.body-BE-product.js-74: ', req.body)
                return res
                    .status(500)
                    .json({
                        success: false,
                        message: 'Something wrong of updatedProduct!-BE- product.js-79',
                    })
            }
            return res
                .status(200)
                .json({
                    success: true,
                    message: 'Product is updated successfully!-BE- product.js-76',
                })
        } catch (error) {
            return res
                .status(500)
                .json({
                    success: false,
                    message: 'Something wrong of internal server!-BE- product.js-33',
                    error
                })
        }
    }
)
//DELETE PRODUCT
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        console.log("deletedProduct-BE-product.js-94: ", deletedProduct)
        return res
            .status(200)
            .json({
                success: true,
                message: 'Product is deleted successfully!-BE-product.js-99',
                deletedProduct
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE- product.js-107',
                error
            })
    }
})
//FIND PRODUCT
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        console.log("Find Product-BE-product.js-117: ", product);
        const {_id, __v, ...others} = product._doc
        return res
            .status(200)
            .json({
                success: true,
                message: 'Find Product!-BE-product.js-121: ',
                product,
                others
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE- product.js-122',
                error
            })
    }
})

// GET ALL PRODUCTS
router.get('/', async (req, res) => {
    const qNew = req.query.new;
    console.log('qNew-BE-product.js-139: ', qNew)
    const qCategory = req.query.category;
    console.log('qCategory-BE-product.js-139: ', qCategory)
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({createdAt: -1}).limit(3)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            });
        } else {
            products = await Product.find();
        }
        return res
            .status(200)
            .json({success: true, message: 'List products: ', products})
    } catch (error) {
        return res
            .status(500)
            .json({
                success: false,
                message: 'Something wrong of internal server!-BE- product.js-123',
            })
    }

})
module.exports = router