const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    // console.log('req.headers-BE-verifyToken-5:', req.headers)
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        // console.log('token-BE-verifyToken-8: ', token)
        jwt.verify(token, process.env.JWT_SEC, (error, user) => {
            if (error) res
                .status(403)
                .json({
                    success: false,
                    message: 'Token is not valid_BE_verifyToken_verifyToken.js-14'
                });
            req.user = user;
            // console.log('user-BE-verifyToken-17: ', user)
            next();
        });
    } else {
        return res
            .status(400)
            .json({
                success: false,
                message: 'You are not authorized!_BE_verifyToken.js-24'
            })
    }

}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            // console.log('req.user.id-BE-verifyToken.js-34: ', req.user.id)
            next()
        } else {
            return res.status(403).json({success: false, message: 'You are not allowed to do that!-verifyToken.js-35'})
        }
    })
}
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return res
                .status(403)
                .json({
                    success: false,
                    message: 'You are not Admin to do that!-verifyToken.js-50'
                })
        }
    })
}
// export default verifyToken

module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}