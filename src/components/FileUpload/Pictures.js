import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
// import Layout from '../shared/Layout'
// import { Link } from 'react-router-dom'

class Pictures extends React.Component {
  constructor (props) {
    super()

    this.state = {
      upload: []
    }
  }

  async componentDidMount () {
    const response = await axios(`${apiUrl}/uploads`)
    this.setState({ upload: response.data.uploads })
  }

  handleDelete = (_id) => {
    axios({
      url: `${apiUrl}/uploads/${_id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => {
        axios(`${apiUrl}/uploads`)
          .then(res => {
            this.setState({ upload: res.data.uploads })
          })
          .then(() => this.props.alert('Has been deleted!', 'success'))
        // .catch(console.error)
      })
  }

  render () {
    const url = this.state.upload.map(url => (
      <li key={url._id}>
        <img src={url.file} />
        <Button variant="danger" onClick={() => this.handleDelete(url._id)}>Delete Picture</Button>
      </li>
    ))
    // const pictures = this.state.file.map(picture => (
    //   <li key={picture._id}>
    //     <img src={this.state.picture} />
    //   </li>
    // ))

    return (
      <div>
        <h3>All the file</h3>
        <ul>
          {url}
        </ul>
      </div>
    )
  }
}

export default Pictures
