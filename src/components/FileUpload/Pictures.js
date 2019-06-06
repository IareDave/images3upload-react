import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
// import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'

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

  handleDelete = (id) => {
    axios({
      url: `${apiUrl}/uploads/${id}`,
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

  // handleUpdate = (_id) => {
  //   axios({
  //     url: `${apiUrl}/uploads/${_id}`,
  //     method: 'PATCH',
  //     headers: {
  //       'Authorization': `Token token=${this.props.user.token}`
  //     }
  //   })
  //     .then(() => {
  //       axios(`${apiUrl}/uploads`)
  //         .then(res => {
  //           this.setState({ upload: res.data.uploads })
  //         })
  //         .then(() => this.props.alert('Has been updated!', 'success'))
  //       // .catch(console.error)
  //     })
  // }
  // <Link to={ '/uploads/' + url._id + '/edit' }><Button variant="success">Update A Movie</Button></Link>
  // <Button variant="warning" onClick={() => this.handleUpdate(url._id)}>Update Picture</Button>

  render () {
    const url = this.state.upload.map(url => (
      <li key={url._id}>
        <img src={url.file} />
        <Button variant="danger" onClick={() => this.handleDelete(url._id)}>Delete Picture</Button>
        <Link to={ '/uploads/' + url._id }><Button variant="success">Update A Movie</Button></Link>
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
