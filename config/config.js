const config = {
    production: {
      SECRET: process.env.SECRET,
      DATABASE: process.env.MONGODB_URI,
    },
      default:{
          SECRET:'superpassword',
          SERVER:'localhost:3001',
          DATABASE:'mongodb://localhost:27017/self',
          curlURL:'http://newcrm.dev.grtinv.com',
          NEWS:{
              SOURCE:'https://newsapi.org/v2/everything',
              KEY:'apiKey=579efe4448f5421691f729a9d904d814'
          },
      }
  }
  
  exports.get = function get(env) {
      return config[env] || config.default;
  }