module.exports = {
	css: {
		extract: false
	},

	// 它支持webPack-dev-server的所有选项
	assetsDir: 'static', // 指定`build`时,在静态文件上一层添加static目录
	// devServer: {
	//   host: '0.0.0.0',
	//   port: 8080, // 端口号
	//   https: false, // https:{type:Boolean}
	//   open: true, // 配置自动启动浏览器
	//   // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

	//   // 配置多个代理
	//   proxy: {
	//     '/api': {
	//       target: 'http://172.22.12.28:30083/',
	//       // target: "http://172.23.40.202:30083/",
	//       changeOrigin: true,
	//       pathRewrite: {
	//         '^/api': '/'
	//       }
	//     }
	//   }
	// },
	devServer: {
		proxy: { // 配置跨域
			'/api': {
				target: 'http://121.4.93.20', // 这里后台的地址模拟的;应该填写你们真实的后台接口
				changOrigin: true, // 允许跨域
				pathRewrite: {
					/* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
					  实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
					 */
					'^/api': '/'
				}
			}
		}
	},
	publicPath: './'
}
