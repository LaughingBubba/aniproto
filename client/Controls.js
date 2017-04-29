import React, {Component} from 'react'
import Controls from './Controls'

export default class ParentNode extends Component {
  constructor(props) {
    super(props)
  }

  handleClick (e, deg, dir) {
    e.preventDefault()
    console.log("default prevented")
    this.props.onTwist(deg, dir)
  }

  render() {
    return (
      <div>
        <button onClick={(e)=>this.handleClick(e, 30, -1)}>Twist Left 30 degs</button>
        <button onClick={(e)=>this.handleClick(e, 30,  1)}>Twist Right 30 degs</button>
      </div>
    )
  }
}