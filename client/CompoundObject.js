import React, {Component} from 'react'
import TrianglePath from './Path'
import Circle from './Circle'

export default class CompoundObject extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <g key="compoundObject" className="compoundObject">
        <TrianglePath />
        <Circle />
      </g>
    )
  }

}