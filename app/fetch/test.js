import 'whatwg-fetch'
import 'es6-promise'


export function getDate() {
	var result = fetch('/api/1',{
		methods: 'GET',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})

	result.then((res) => {
		return res.text()
	}).then((text) => {
		console.log(text) // 打印出来的为一个text数据
	})

	var result2 = fetch('/api/2',{
		methods: 'GET',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})

	result.then((res) => {
		return res.json()
	}).then((json) => {
		console.log(json)// 打印出来的为一个json格式的数据
	})
}

export function postDate() {
	var result = fetch('/api/1',{
		methods: 'POST',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		// 注意 post 时候参数的形式
		body: "a=1&b=100"
	})

	result.then((res) => {
		return res.json()
	}).then((json) => {
		console.log(json)
	})
}