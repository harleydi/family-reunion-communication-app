const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected ...')
    } catch (error) {
        console.error('Could not connect to Database', error)
        process.exit(1)
    }
}

module.exports = connectDB