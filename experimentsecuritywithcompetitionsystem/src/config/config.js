//config.js
const dotenv = require('dotenv');
dotenv.config(); //Build the process.env object.
var API_ENDPOINT_URL_STR = "https://ljp4e9vmm3.execute-api.us-east-1.amazonaws.com/Prod";
module.exports = {
    databaseUserName: process.env.DB_USERNAME,
    databasePassword: process.env.DB_PASSWORD,
    databaseName: process.env.DB_DATABASE_NAME,

    cloudinaryUrl: process.env.CLOUDINARY_URL,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
    JWTKey: process.env.JWTKEY,
    mailtrapUserName: process.env.MAILTRAP_USERNAME,
    mailtrapPassword:process.env.MAILTRAP_PASSWORD
};


window._config = {
    cognito: {
        userPoolId: 'us-east-1_W0FJBU4No', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '5n1j6jk44ds98j91oulb1g9ehi', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-east-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};

//Reference:
//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786