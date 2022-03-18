if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

let port = process.env.PORT
let MOMGODB_URI:any

MOMGODB_URI = process.env.MONGODB_URI
if(process.env.NODE_ENV === 'test'){
    MOMGODB_URI = process.env.MONGODB_TEST_URI
}

module.exports = { port, MOMGODB_URI }