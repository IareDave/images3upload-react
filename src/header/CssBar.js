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
            <li>Jelena Jovanovic <span>Web Developer</span></li>
            <li><a href="https://vanila.io" rel="noopener noreferrer" target="_blank">Company</a></li>
            <li><a href="https://instagram.com/plavookac" rel="noopener noreferrer" target="_blank">Instagram</a></li>
            <li><a href="https://twitter.com/plavookac" rel="noopener noreferrer" target="_blank">Twitter</a></li>
            <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" rel="noopener noreferrer" target="_blank">YouTube</a></li>
            <li><a href="https://www.linkedin.com/in/plavookac/" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
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
