import React, {Component} from 'react'

export default class Circle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount (nextProps, nextState) {
    // this.props.registerAppearance()
    console.log(`==== CIRCLE(Will Mount) : std react lifecycle ==== `)
  }

  componentWillAppear (done) {
    console.log(`---- CIRCLE(TG.Will.Appear) ---- `)
    done()
  }

  componentWillEnter (done) {
    console.log(`---- CIRCLE(TG.Will.Enter) ---- `)
    done()
  }

  componentWillReceiveProps (nextProps) {
    console.log(`==== CIRCLE(Will Receive Props) : std react lifecycle ==== `)
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log(`==== CIRCLE(Should Component Update) : std react lifecycle ==== `)
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log(`==== CIRCLE(Will Update) : std react lifecycle ==== `)
  }

  componentWillLeave (done) {
    console.log(`---- CIRCLE(TG.Will.Leave) ---- `)
    done()

  }
  render () {
    return (
        <circle key="aCircle" className="aCircle" cx="40" cy="40" r="24" stroke="black" 
        strokeWidth="3" 
        fill="blue"/>
    )
  }

  componentDidEnter () {
    console.log(`---- CIRCLE(TG.Did.Enter) ---- `)
  }

  componentDidLeave () {
    console.log(`---- CIRCLE(TG.Did.Leave) ---- `)
  }

  componentDidUpdate () {
    console.log(`==== CIRCLE(Did Update) : std react lifecycle ==== `)
  }

  componentDidAppear () {
    console.log(`---- CIRCLE(TG.Did.Appear) ---- `)
  }

  componentDidMount () {
    console.log(`==== CIRCLE(Did Mount) : std react lifecycle ==== `)
  }
}