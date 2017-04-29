import React, { Component } from 'react'

export default class Animator extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount (nextProps, nextState) {
    // this.props.registerAppearance()
    console.log(`==== ANIMATOR(Will Mount) : std react lifecycle ==== `)
  }

  componentWillAppear (done) {
    console.log(`---- ANIMATOR(TG.Will.Appear) ---- `)
    this.container.beginElement()
    setTimeout(()=>done(),this.props.milSecDur)
    // done()
  }

  componentWillEnter (done) {
    console.log(`---- ANIMATOR(TG.Will.Enter) ---- `)
    this.container.beginElement()
    setTimeout(()=>done(),this.props.milSecDur)
    // done()
  }

  componentWillReceiveProps (nextProps) {
    console.log(`==== ANIMATOR(Will Receive Props) : std react lifecycle ==== `)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log(`==== ANIMATOR(Should Component Update) : std react lifecycle ==== `)
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log(`==== ANIMATOR(Will Update) : std react lifecycle ==== `)
  }

  componentWillLeave (done) {
    console.log(`---- ANIMATOR(TG.Will.Leave) ---- `)
    done()

  }

  render () {
    const {degrees, direction, rotation} = this.props
    console.log(`==== ANIMATOR(render) rotate ${rotation}`)
    return (
      <animateTransform 
        ref={c => this.container = c}
        id="someRotation"
        key="someRotation"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from={`$0 0 0`}
        to={`${rotation} 0 0`}
        begin="indefinite"
        dur={`${this.props.milSecDur/1000}s`}
        restart="allways"
        repeatCount="0"
        fill="freeze"
        additive="sum"
        /> 
    )
  }

  componentDidEnter () {
    console.log(`---- ANIMATOR(TG.Did.Enter) ---- `)
    this.props.reset(this.props.rotation)
  }

  componentDidLeave () {
    console.log(`---- ANIMATOR(TG.Did.Leave) ---- `)
  }

  componentDidUpdate () {
    console.log(`==== ANIMATOR(Did Update) : std react lifecycle ==== `)
  }

  componentDidAppear () {
    console.log(`---- ANIMATOR(TG.Did.Appear) ---- `)
    this.props.reset(this.props.rotation)
  }

  componentDidMount () {
    console.log(`==== ANIMATOR(Did Mount) : std react lifecycle ==== `)
  }
}

