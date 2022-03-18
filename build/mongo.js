"use strict";
const { connect } = require('mongoose');
const config = require('./utils/config');
const connectString = config.MOMGODB_URI;
connect(connectString)
    .then(() => {
    console.log(`Connected success at MONGODB`);
})
    .catch((error) => {
    console.error(error);
});
