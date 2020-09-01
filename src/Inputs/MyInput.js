import { withFormsy } from 'formsy-react'
import React from 'react'

class MyInput extends React.Component {
  constructor (props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue (event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value)
  }

  render () {
    // An error message is passed only if the component is invalid
    const errorMessage = this.props.errorMessage

    return (
      <div className='input-row'>
        <label>{this.props.label} {this.props.isRequired ? '*' : null}</label>
        <input onChange={this.changeValue} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value || ''} />
        <span>{errorMessage}</span>
      </div>
    )
  }
}

export default withFormsy(MyInput)
