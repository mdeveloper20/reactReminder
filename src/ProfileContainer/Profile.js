import Select from 'react-select'
import React, { Component } from 'react'
import withLoading from '../withLoading'

const selectStyle = {
	select: {
		width: '100%',
		maxWidth: 600
	}
}

const customStyles = {
	menu: (provided, state) => ({
		...provided,
		width: state.selectProps.width,
		borderBottom: '1px dotted pink',
		color: state.selectProps.menuColor,
		padding: 10,
		backgroundColor: 'rgba(100,100,50,0.8)'
	}),

	control: (_, { selectProps: { width } }) => ({
		width: width
	}),

	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1
		const transition = 'opacity 300ms'

		return { ...provided, opacity, transition }
	}
}

class Profile extends Component {
	render () {
		const { title, options, onChangeInput, selected, avatar } = this.props

		return <div style={selectStyle}>
			<h1>{title}</h1>

			<Select styles={customStyles} isMulti={false} options={options} onChange={onChangeInput} value={selected}/>
			{!!avatar && <img src={avatar} alt={'user avatar'}/>}

		</div>
	}
}

export default withLoading(Profile)
