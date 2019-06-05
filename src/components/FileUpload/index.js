import React from 'react'
import { post } from 'axios'
import apiUrl from '../../apiConfig'
// const getFormFields = require('../../../lib/get-form-fields')

class SimpleReactFileUpload extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      file: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit (e) {
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      console.log(response.data)
    })
  }
  onChange (e) {
    this.setState({ file: e.target.files[0] })
  }
  fileUpload (file) {
    // const formData = new FormData()
    // const fileToSend = formData.append('file', file)
    console.log(file)
    const config = {
      headers: {
        'Authorization': 'Token token=' + (this.user ? this.user.token : ''),
        'Content-Type': 'multipart/form-data'
      }
    }
    return post(`${apiUrl}/uploads`, file, config)
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} encType="multipart/form-data">
        <h1>File Upload</h1>
        <input name="image[file]" type="file" onChange={this.onChange} />
        <button name="submit" type="submit">Upload</button>
      </form>
    )
  }
}

export default SimpleReactFileUpload
