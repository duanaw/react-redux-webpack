import 'whatwg-fetch'
import 'es6-promise'

//对象转换成字符串形式  item=1&item2=2

function paramesObj(obj) {
	var str = '',item;
	for (item in obj) {
		str += '&' + item + '=' + encodeURIComponent(obj[item])
	}

	if (str) {
		str = str.slice(1)
	}

	return str
}

export default function post(url,paramesStr) {
	var result = fetch(url,{
		methods: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		// 注意 post 时候参数的形式
		body: paramesObj(paramesStr)
	})
}