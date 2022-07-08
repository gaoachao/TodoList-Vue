const { defineConfig } = require('@vue/cli-service')

//用commonJS的exports
module.exports = defineConfig({
	// pages:{
	//		entry:'src/main.js'
	// },
  transpileDependencies: true,
	lintOnSave:false   //关闭语法检查
})
