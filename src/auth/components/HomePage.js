import React from 'react'
import Button from 'react-bootstrap/Button'
import { WelcomeMessage, FontMessage } from './HomePageStyle'
import { withRouter, Link } from 'react-router-dom'

class HomePage extends React.Component {
  render () {
    return (
      <WelcomeMessage>
        <p>Welcome to <span><Button size="lg" variant="outline-danger"><FontMessage><a href="https://github.com/IareDave">my</a></FontMessage></Button></span> file uploader. <Button size="lg" variant="outline-danger"><FontMessage><Link to="/sign-in">Sign in</Link></FontMessage></Button> to continue</p>
      </WelcomeMessage>
    )
  }
}

export default withRouter(HomePage)
