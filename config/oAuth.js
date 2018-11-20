const oAuth = {
        // "cookieSecret":"dfkjdlsfjljklsdfj",
    facebook:{
        app_id:"499232270574546",
        app_secret:"97b445aa68b35529e70a2e6b175d6168",
        callback:"https://localhost:3001/callback/facebook"
    },
    twitter:{
        "consumer_key":"akeyishere",
        "consumer_secret":"mysecretisbetterthanyoursecret",
        "callback":"http://localhost:3000/auth/twitter/callback"
    }
}
module.exports = oAuth;