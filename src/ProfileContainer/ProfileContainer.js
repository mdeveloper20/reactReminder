import React, { Component } from 'react'
import Profile from './Profile'

class ProfileContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {
			selected: [],
			options: [],
			isLoading: false
		}
	}

	componentDidMount = () => {
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					options: result.data.map((i) => ({
						label: i.first_name,
						value: i.id
					}))
				})
			})
	};

	onChangeInput = (item) => {
		this.setState(
			{
				selected: item
			},
			() => {
				this.setState({
					isLoading: true
				})

				fetch('https://reqres.in/api/users/' + item.value, { cache: 'reload' })
					.then((res) => res.json())
					.then((result) => {
						this.setState({
							avatar: result.data.avatar,
							isLoading: false
						})
					})
			}
		)
	};

	render () {
		return (
			!this.state.isLoading ? <Profile
				title="Search profiles"
				options={this.state.options}
				onChangeInput={this.onChangeInput}
				selected={this.state.selected}
				avatar={this.state.avatar}

			/> : 'Loading.....'
		)
	}
}

export default ProfileContainer
