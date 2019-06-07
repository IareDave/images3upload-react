import React, { Component } from 'react'
import './Preview.scss'
// import { signIn } from '../api'
// import messages from '../messages'

class Preview extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: '',
      toggleForm: false
    }
  }

  render () {
    // const { email, password } = this.state
    return (
      <div>
        <div className="con"></div>

        <section className="one">
          <div className="wrapper"></div>
        </section>

        <section className="two">
          <div className="wrapper"></div>
        </section>

        <section className="three">
          <div className="wrapper"></div>
        </section>

        <section className="four">
          <div className="wrapper"></div>
        </section>
      </div>
    )
  }
}

export default (Preview)
