import React, { PureComponent } from 'react'
import AsyncSelect from 'react-select/async'
import './users.css'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated()

class UsersList extends PureComponent {
    state = { selectedUsers: [] }

    onChange = selectedUsers => {
      this.setState({
        selectedUsers: selectedUsers || []
      })
    }

    renderEveryUser= user => {
      return <img src={user.avatar} alt='user avatar'/>
    }

    loadOptions= async (inputValue, callback) => {
      const response = await fetch(`http://localhost:3001/api/users?first_name_like=${inputValue}`)
      const json = await response.json()
      callback(json.map(i => ({ label: i.first_name, value: i.id, avatar: i.avatar })))
    }

    render () {
      return (<div className='users'>

        <div className='avatars'>
          {this.state.selectedUsers.map(this.renderEveryUser)}
        </div>

        <AsyncSelect
          isMulti
          components={animatedComponents}

          value={this.state.selectedUsers}
          loadOptions={this.loadOptions}
          onChange={this.onChange}
          placeholder={'type something...'}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              text: 'orangered',
              primary25: 'green',
              primary: 'black',
              neutral0: '#c8c8c8',
              neutral90: 'white'
            }
          })}
        />
      </div>)
    }
}

export default UsersList
