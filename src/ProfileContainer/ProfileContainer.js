import React, { Component } from 'react'
import Profile from './Profile'
const selectStyle = {
	backgroundColor: 'rgba(0,0,0,0.4)',
	width: '70%',
	height: '70%',
	padding: 50,
	borderRadius: 20,
	color: 'white'

}

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
					isLoading: true,
					name: item.label

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
			<div style={selectStyle}>
				<h1>Search a User</h1>

				{!this.state.isLoading ? <Profile
					options={this.state.options}
					onChangeInput={this.onChangeInput}
					selected={this.state.selected}
					avatar={this.state.avatar}
					name={this.state.name}
				/> : 'Loading.....'}

			</div>
		)
	}
}

export default ProfileContainer
