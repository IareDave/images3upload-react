import React from 'react'
import Alert from 'react-bootstrap/Alert'

class AutoDismissAlert extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      show: true
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({ show: false })
    }, 3000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  handleClose = () => this.setState({ show: false })

  render () {
    const { alert } = this.props
    return (
      <div className="fashion-alert">
        <Alert
          dismissible
          show={this.state.show}
          variant={alert.type}
          onClose={this.handleClose}
        >
          <div className="fashion">
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </div>
        </Alert>
      </div>
    )
  }
}

export default AutoDismissAlert
