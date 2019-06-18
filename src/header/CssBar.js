import React from 'react'
import './CssBar.css'
class CssBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggleSideBar: true
    }
    // Create the ref
    this.textInput = React.createRef()
  }

  componentDidMount () {
    this.textInput.checked = true
    console.log('test')
  }

  render () {
    return (
      <div>
        <div className="headerr" />
        <input ref={this.textInput} checked={this.state.toggleSideBar} type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1" />
          <div className="spinner horizontal" />
          <div className="spinner diagonal part-2" />
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">

          </ul>
        </div>
        <div id="center" className="main center">
          <div className="mainInner">

          </div>
          <div className="mainInner">

          </div>
          <div className="mainInner">

          </div>
        </div>
      </div>

    )
  }
}

export default CssBar
