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
      .then(() => this.props.alert(`${this.state.file} has been uploaded`, 'success'))
      // .then(() => this.props.history.push('/'))
      .catch(() => {
        this.props.alert('File upload has failed', 'danger')
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
        <label className="fileContainer">
          <Form className="form" onSubmit={this.handleSubmit} encType="multipart/form-data">
            <h1 style={{ color: 'red' }}>Create Upload</h1>
            <div className="wrapper">
              <div className="file-upload">
                <Form.Group controlId="uploadurl">
                  <Form.Label></Form.Label>
                  <i className="fa fa-arrow-up"></i>
                  <Form.Control
                    className="dropbox"
                    label="test"
                    type="file"
                    name="image"
                    required
                    onChange={this.handleChange}
                    placeholder="Enter the upload url"
                  />
                  <i className="fa fa-arrow-up"></i>
                </Form.Group>
              </div>
            </div>
            <Button
              variant="primary"
              type="submit"
              className="m-1"
            >
          Submit
            </Button>
          </Form>
        </label>
      </div>
    )
  }
}

export default withRouter(FileUpload)
