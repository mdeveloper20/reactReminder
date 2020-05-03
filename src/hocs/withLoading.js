import React, { Component } from 'react'
function withLoading (WrappedComponent) {
	return class extends Component {
		render () {
			return this.props.isLoading ? 'Loading...' : <WrappedComponent {...this.props} />
		}
	}
}

export default withLoading
