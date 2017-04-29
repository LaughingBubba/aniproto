import React, { Component } from 'react'

export default class Path extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <path id="aPath" key="aPath"
        d="M 100 100 l 100 100 l -100 0 l 0 -100" 
        stroke="green" 
        strokeWidth="3" 
        fill="green"/>
      )
  }
}