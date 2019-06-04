import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import apiUrl from '../../../apiConfig'

class FileUpload extends Component {
  constructor () {
    super()

    this.state = {
      url: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/uploads`,
      method: 'post',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        upload: {
          url: this.state.url
        }
      }
    })
      .then(response => this.setState({
        upload: response.data.upload
      }))
      .then(() => this.props.alert(`${this.state.url} has been added to the library!`, 'success'))
      .then(() => this.props.history.push('/'))
      .catch(() => {
        this.props.alert('Whoops! Failed to add your upload. Please try again.', 'danger')
        this.setState({
          url: ''
        })
      })
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  resetForm = () => this.setState({
    url: ''
  })

  render () {
    const { url } = this.state

    return (
      <Form className="form" onSubmit={this.handleSubmit}>
        <h2>Create upload</h2>
        <Form.Group controlId="uploadurl">
          <Form.Label>upload url</Form.Label>
          <Form.Control
            encType="multipart/form-data"
            method="post"
            type="file"
            value={url}
            name="url"
            required
            onChange={this.handleChange}
            placeholder="Enter the upload url"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="m-1"
        >
          Submit
        </Button>
        <Button
          variant="danger"
          type="button"
          className="m-1"
          onClick={this.resetForm}
        >
          Reset
        </Button>
      </Form>
    )
  }
}

export default withRouter(FileUpload)
