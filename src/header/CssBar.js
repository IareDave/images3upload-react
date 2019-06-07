import React from 'react'
import './CssBar.css'
class CssBar extends React.Component {
  render () {
    return (
      <div>
        <div className="headerr" />
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
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
