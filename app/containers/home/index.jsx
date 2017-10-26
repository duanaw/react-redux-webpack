import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory,Link } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Header from '../../components/Header/index'

class Home extends React.Component {
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	render() {
		return (
			<div>
				hello world
			</div>
		)
	}
}

//------------------------绑定 react-redux ----------------
function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)