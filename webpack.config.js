var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'app/index.jsx'),
	output: {
		path: __dirname + "/build",
        filename: "js/bundle.js"
	},
	resolve: {
		extensions: ['', '.js','.jsx'],//这里就是在import .js 或 .jsx文件的时候不让用加后缀.js
	},
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader',query: {
                presets: ['react', 'es2015']
            } },
			{test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less'},
			{test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss'},
			{test: /\.(png|jpg|gif|jpeg|bmp)$/i, loader: 'url-loader?limit=5000'},//限制大小5kb
			{test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'}
		]
	},
	postcss: [
		require('autoprefixer')//调用autoprefixer插件，例如 display: flex  自动加前缀
	],
	plugins: [
		//html 模板插件
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),
		//热加载插件 (修改后自动刷新)
		new webpack.HotModuleReplacementPlugin(),
		//打开浏览器
		new OpenBrowserPlugin({
			url: 'http:localhost:8080'
		}),
		//可在业务 js 代码中使用_DEV_判断是否是dev模式（dev模式下可以提示错误）
		new webpack.DefinePlugin({
			_DEV_: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
		})
	],

	devServer: {
		//代理转发 ''
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				secure: false
			}
		},
		colors: true,//终端中输出结果为彩色
		historyApiFallback: true,//不跳转，在开发单页面应用时非常有用，它依赖于html5 history api，如果设置为true，所有跳转将指向index.html
		inline: true,//实时刷新
		hot: true //使用热加载插件 HotModuleReplacementPlugin
	}

} 