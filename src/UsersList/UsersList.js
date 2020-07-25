import React, { PureComponent } from 'react'
import './users.css'
import AsyncSelect from 'react-select/async'
import makeAnimated from 'react-select/animated'

const animatedComponent = makeAnimated()

class UsersList extends PureComponent {
    state = { selectedUsers: [] }

    onChange = selectedUsers => {
      this.setState({
        selectedUsers: selectedUsers || []
      })
    }

    loadOptions=async (inputText, callback) => {
      const response = await fetch(`http://localhost:3001/api/users?first_name_like=${inputText}`)
      const json = await response.json()

      callback(json.map(i => ({ label: i.first_name, value: i.id, avatar: i.avatar })))
    }

    renderEveryUser= user => {
      return <img src={user.avatar} alt='user avatar'/>
    }

    render () {
      return (<div className='users'>

        <div className='avatars'>
          {this.state.selectedUsers.map(this.renderEveryUser)}
        </div>

        <AsyncSelect
          isMulti
          components={animatedComponent}
          value={this.state.selectedUsers}
          onChange={this.onChange}
          placeholder={'type something...'}
          loadOptions={this.loadOptions}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
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
