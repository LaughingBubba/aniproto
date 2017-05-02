import React, {Component} from 'react'
import Controls from './Controls'
import Animator from './Animator'
import TrianglePath from './Path'
import Circle from './Circle'

import {TransitionGroup} from 'react-transition-group'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: true,
      rotation: {
        cur: 0,
        animateTo: 360
      }
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true // this.state.animate
  }

  toggleOn () {
    this.setState({animate: true})
  }

  toggleOff (animatedTo) {
    let newRotation = {}
    newRotation.cur = this.state.rotation.cur + animatedTo
    newRotation.animatedTo = 0
    this.setState({rotation: newRotation})
    this.setState({animate: false})
  }

  onTwist (degrees, direction) {
    console.log("=== twister ==")
    let newRotation = {}
    newRotation.cur = this.state.rotation.cur
    newRotation.animateTo = degrees * direction
    this.setState({rotation: newRotation})
    this.toggleOn()
  }

  fullRotation () {
    console.log("=== full rotation ==")
    let newRotation = {}
    newRotation.animateTo = 360
    newRotation.cur = this.state.rotation.cur
    this.setState({rotation: newRotation})
    this.toggleOn()
  }

  render() {
    const width = 800
    const height = 800
    const rotation = this.state.rotation.cur

    const trianglePath = <TrianglePath />
    const circle = <Circle />
    
    const animate = this.state.animate ? 
      <Animator 
          rotation={this.state.rotation.animateTo}
          milSecDur={1000}
          reset={this.toggleOff.bind(this)} 
      /> : null
    

    return (
      <div>
        <h1>Simple SMIL animateTransform of an SVG path with React</h1>
        <Controls onTwist={this.onTwist.bind(this)} />
        <svg height={800} width={800} >
          <g id="thisG" key="thisG" transform={`translate( ${(width / 3) + 0} , ${(height / 3) - 0} )`} > 

            <TransitionGroup 
              component="g" 
              transform={`rotate(${this.state.rotation.cur} 0 0)`}
              onClickCapture={this.fullRotation.bind(this)}
            >
              {animate}
              {trianglePath}
              {circle}
            </TransitionGroup>

          </g>
        </svg>
      </div>
    )
  }
}