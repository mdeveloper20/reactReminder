import Select from 'react-select'
import React, { Component } from 'react'
import withLoading from '../hocs/withLoading'

const avatarStyle = {
	backgroundColor: 'rgba(0,0,0,0.4)',
	borderRadius: 20,
	color: 'white',
	marginTop: 20,
	marginRight: 20

}
const detailStyle = {
	display: 'flex',
	alignItems: 'center'

}

class Profile extends Component {
	render () {
		const { options, onChangeInput, selected, avatar, name } = this.props

		return <div>
			<Select theme={(theme) => ({
				...theme,
				borderRadius: 0,
				colors: {
					...theme.colors,
					text: 'orangered',
					primary25: 'black',
					primary: 'black',
					neutral0: 'darkgray'

				}
			})} isMulti={false} options={options} onChange={onChangeInput} value={selected}/>
			<div style={detailStyle}>
				{!!avatar && <img style={avatarStyle} src={avatar} alt={'user avatar'}/>}
				{name}
			</div>
		</div>
	}
}

export default withLoading(Profile)
