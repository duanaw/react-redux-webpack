import {combineReducers} from 'redux'

import userinfo from './userinfo'
// 可以整合多个计算规则
// import userinfo1 from './userinfo1'
// import userinfo2 from './userinfo2'

const rootReducer = combineReducers({
	userinfo
	// userinfo1,
	// userinfo2
})

export default rootReducer