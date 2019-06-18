import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import HomePage from './auth/components/HomePage'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import FileUpload from './components/FileUpload/index'
import Pictures from './components/FileUpload/Pictures'
// import CssBar from './components/FileUpload/CssBar'
import PictureEdit from './components/FileUpload/PictureEdit'
// import Alert from 'react-bootstrap/Alert'
import AutoDismissAlert from './AutoDismissAlert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      toggleSideBar: true
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user, toggleSideBar } = this.state

    return (
      <React.Fragment>
        <Header user={user} toggleSideBar={toggleSideBar} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            alert={alert}
          />
        ))}
        <main className="container">
          <AuthenticatedRoute user={user} exact path='/create-uploads' render={() => (
            <FileUpload user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} exact path='/uploads' render={() => (
            <Pictures user={user} alert={this.alert} />
          )} />
          <AuthenticatedRoute user={user} exact path='/uploads/:id' render={() => (
            <PictureEdit user={user} alert={this.alert} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/' render={() => (
            <HomePage alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
