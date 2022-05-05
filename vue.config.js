
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  
})

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/despliegue-Vue-practice/'
  : '/'
  })
  

 

 
