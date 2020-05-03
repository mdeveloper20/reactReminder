import React, { Component } from 'react'

function withLoading (WrappedComponent) {
	return class extends Component {
		render () {
			const { isLoading } = this.props
			return !isLoading ? <WrappedComponent {...this.props} /> : <div>Loading...</div>
		}
	}
}
export default withLoading
