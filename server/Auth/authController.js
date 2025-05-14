const User = require("./User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userRegister = async (req, res) => {
    try {
        console.log('recieved body', req.body)
        const { email, password } = req.body

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(409).json({ success: false, message: "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            email,
            password: hashedPassword
        })

        await newUser.save()

        const token = jwt.sign(
            { userID: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        )

        return res.status(200).json({
            success: true,
            message: "New user created",
            token,
            user: newUser
        })
    } catch (error) {
        res.status(500).json({
            success: "false",
            message: "Failed to register user",
            error: error.message

        })
        process.exit(1)
    }
}


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const checkEmail = await User.findOne({ email })
        if (!checkEmail) {
            res.status(401).json({
                success: false,
                message: "Invalid Email"
            })
        }

        const checkPassword = bcrypt.compare(password, checkEmail.password)
        if (!checkPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            })
        }

        const token = jwt.sign(
            {id: checkEmail._id},
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        )

        return res.status(200).json({
            success: true,
            message: "User successfully logged in",
            token,
            user: checkEmail
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to login user",
            error: error.message
        })
        process.exit(1)
    }
}



module.exports = { userRegister, userLogin }