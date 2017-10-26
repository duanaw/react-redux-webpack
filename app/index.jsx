import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import RouteMap from './router/routeMap'
//通用样式
import './static/css/common.less'

const store = configureStore()

render(
	<Provider store={store}>
		<RouteMap history={hashHistory}/>
	</Provider>,
	document.getElementById('root')
)