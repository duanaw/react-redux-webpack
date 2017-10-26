import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import App from '../containers/app'
import Home from '../containers/home/index'
import Search from '../containers/search/index'
import Details from '../containers/details/index'
import User from '../containers/user/index'
import City from '../containers/city/index'
import Notfound from '../containers/404'

class RouteMap extends React.Component {
	render() {
		return (
				<Router history={this.props.history}>
					<Route path="/" component={App}>
						<IndexRoute component={Home} />
						<Route path="/city" component={City} />
						<Route path="/search/:type(/:keywords)" component={Search} />
						<Route path="/user" component={User} />
						<Route path="/details/:id" component={Details} />
					</Route>
					<Route path="*" component={Notfound} />
				</Router>
			)
	}
}

export default RouteMap