const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'https://jaksim31-api.herokuapp.com/',
          changeOrigin: true
      })
  )
};