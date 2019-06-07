import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import './CssBar.css'
// import CssBar from './CssBar'

// const authenticatedOptions = (
//   <React.Fragment>
//     <Link to="/change-password">Change Password</Link>
//     <Link to="/sign-out">Sign Out</Link>
//     <Link to="/uploads"> View Uploads</Link>
//     <Link to="/create-uploads">Create-Uploads</Link>
//   </React.Fragment>
// )
//
// const unauthenticatedOptions = (
//   <React.Fragment>
//     <Link to="/sign-up">Sign Up</Link>
//     <Link to="/sign-in">Sign In</Link>
//     <Link to="/preview">Preview</Link>
//   </React.Fragment>
// )

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)
//
// <nav>
//   { user && <span>Welcome, {user.email}</span>}
//   { user ? authenticatedOptions : unauthenticatedOptions }
//   { alwaysOptions }
// </nav>
const Header = ({ user }) => (
  <header className="main-header">
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
          <li>{ alwaysOptions }</li>
          <li>{ user ? <Link to="/change-password">Change Password</Link>
            : <Link to="/sign-up">Sign Up</Link> }</li>
          <li>{ user ? <Link to="/sign-out">Sign Out</Link>
            : <Link to="/sign-in">Sign In</Link> }</li>
          <li>{ user ? <Link to="/uploads"> View Uploads</Link>
            : '' }</li>
          <li>{ user ? <Link to="/create-uploads">Create-Uploads</Link>
            : '' }</li>
        </ul>
      </div>
      <div id="center" className="main center">

      </div>
    </div>
  </header>
)

export default Header
