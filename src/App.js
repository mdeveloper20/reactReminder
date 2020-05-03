import React from 'react'
import './App.css'
import ProfileContainer from './ProfileContainer/ProfileContainer'
import bg from './bg.jpg'
const styles = {
	app: {
		background: `url(${bg})`,
		backgroundSize: 'cover',
		justifyItems: 'center',
		alignItems: 'center',
		display: 'grid',
		height: '100vh',
		fontFamily: 'Arial',
		color: 'rgba(0,0,100,1)',
		gridTemplateColumns: '1fr',
		fontSize: 25
	}
}

function App () {
	return (
		<div style={styles.app} >

			<ProfileContainer/>
		</div>
	)
}

export default App
