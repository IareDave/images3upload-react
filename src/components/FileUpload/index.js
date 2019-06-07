import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './index.scss'
// import Avatar from 'react-avatar'

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
      // .then(console.log)
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
    // const { createdFileId } = this.state

    // if (createdFileId) {
    //   return <Redirect to={`/uploads/${createdFileId}`} />
    // }

    return (
      <div className="po">
        <Form className="form" onSubmit={this.handleSubmit} encType="multipart/form-data">
          <h2>Create upload</h2>
          <Form.Group controlId="uploadurl">
            <Form.Label>upload url</Form.Label>
            <Form.Control
              className="dropbox"
              label="test"
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
        </Form>
      </div>
    )
  }
}

export default withRouter(FileUpload)
