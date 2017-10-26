import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class App extends React.Component {
	constructor(prop,context) {
		super(prop,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render() {
		return (
				<div>
					<div>{this.props.children}</div>
				</div>
			)
	}
}

export default App