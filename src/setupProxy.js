const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(
        proxy('/wetec', {
          target: 'http://47.94.91.9:8080',
          changeOrigin: true
        })
      )
}