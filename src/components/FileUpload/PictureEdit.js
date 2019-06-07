import React from 'react'
// import Layout from '../shared/Layout'
// import fileForm from '../shared/fileForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class PictureEdit extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      file: [],
      updated: false
    }
  }

  async componentDidMount () {
    const response = await axios(`${apiUrl}/uploads/${this.props.match.params.id}`)
    this.setState({ file: response.data.uploads })
  }

  handleChange = (event) => {
    this.setState({ file: event.target.files[0] })
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('image', this.state.file)
    axios({
      url: `${apiUrl}/uploads/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: formData
    })
      .then(response => this.setState({
        updated: true }))
      .then(() => this.props.alert(`${this.state.file} has been updated`, 'success'))
    // .then(() => this.props.history.push('/'))
      .catch(() => {
        this.props.alert('File update has failed.', 'danger')
        this.setState({
          file: ''
        })
      })
  }

  render () {
    // const { updated } = this.state

    // if (updated) {
    //   return <Redirect to={`/uploads/${this.props.match.params._id}`} />
    // }
    /*       <div>
        <fileForm
          file={file}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancelPath={`/uploads/${this.props.match.params.id}`}
        />
      </div> */
    return (
      <div className="po">
        <label className="fileContainer">
          <Form className="form" onSubmit={this.handleSubmit} encType="multipart/form-data">
            <h1 style={{ color: 'green' }}>Update</h1>
            <div className="wrapper">
              <div className="file-upload">
                <Form.Group controlId="uploadurl">
                  <Form.Label></Form.Label>
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

export default withRouter(PictureEdit)
