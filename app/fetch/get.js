import 'whatwg-fetch'
import 'es6-promise'

export default function get(url) {
	var result = fetch(url,{
		methods: 'GET',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
	})
	return result
}