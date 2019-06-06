import React from 'react'
// import Layout from '../shared/Layout'
// import fileForm from '../shared/fileForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class PictureEdit extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      file: []
    }
  }

  async scomponentDidMount () {
    const response = await axios(`${apiUrl}/uploads/${this.props.match.params.id}`)
    this.setState({ file: response.data.file })
  }

  handleChange = (event) => {
    const updateField = {
      [event.target.name]: event.target.value
    }

    const editedfile = Object.assign(this.state.file, updateField)

    this.setState({ file: editedfile })
  }

  handleSubmit = async event => {
    event.preventDefault()
    await axios({
      url: `${apiUrl}/uploads/${this.props.match.params.id}`,
      method: 'PATCH',
      data: {
        file: this.state.file,
        updated: false
      }
    })

    this.setState({ updated: true })
  }

  render () {
    const { updated } = this.state

    if (updated) {
      return <Redirect to={`/uploads/${this.props.match.params.id}`} />
    }
    /*       <div>
        <fileForm
          file={file}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancelPath={`/uploads/${this.props.match.params.id}`}
        />
      </div> */
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

export default PictureEdit
