const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(
        proxy('/xuptbbs', {
          target: 'http://yugengkai.top:8080',
          changeOrigin: true
        })
      )
}