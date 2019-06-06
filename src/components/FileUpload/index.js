import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// const getFormFields = require('../../lib/get-form-fields')

class FileUpload extends Component {
  constructor () {
    super()

    this.state = {
      file: [],
      createdFileId: null
    }
  }

   handleChange = (event) => {
     this.setState({ file: event.target.files[0] })
   }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('image', this.state.file)
    // const data = getFormFields(event.target)
    // this.setState({ url: this.event.})
    axios({
      url: `${apiUrl}/create-uploads`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: formData
    })
      .then(response => this.setState({
        createdFileId: response.data.upload.id
      }))
      .then(() => this.props.alert(`${this.state.file} has been added to the library!`, 'success'))
      // .then(() => this.props.history.push('/'))
      .catch(() => {
        this.props.alert('Whoops! Failed to add your upload. Please try again.', 'danger')
        this.setState({
          file: ''
        })
      })
  }

  render () {
    const { createdFileId } = this.state

    if (createdFileId) {
      return <Redirect to={`/uploads/${createdFileId}`} />
    }

    return (
      <Form className="form" onSubmit={this.handleSubmit} encType="multipart/form-data">
        <h2>Create upload</h2>
        <Form.Group controlId="uploadurl">
          <Form.Label>upload url</Form.Label>
          <Form.Control
            type="file"
            name="image"
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
