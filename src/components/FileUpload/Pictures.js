import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
// import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
// import Img from './stylecomp'
import Avatar from 'react-avatar'

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
        // .catch()
      })
  }

  toggleMenu = () => {

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
  //       // .catch()
  //     })
  // }
  // <Link to={ '/uploads/' + url._id + '/edit' }><Button variant="success">Update A Movie</Button></Link>
  // <Button variant="warning" onClick={() => this.handleUpdate(url._id)}>Update Picture</Button>

  render () {
    const thumbsContainer = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16
    }

    const thumb = {
      marginLeft: 200,
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid #eaeaea',
      marginBottom: 8,
      marginTop: 50,
      marginRight: 8,
      width: 110,
      height: 110,
      padding: 4,
      boxSizing: 'border-box'
    }

    const thumbInner = {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden'
    }

    const previewContainer = {
    }

    const url = this.state.upload.map(url => (
      <div style={previewContainer} key={url._id}>
        <div style={thumb}>
          <li style={thumbInner}>
            <Avatar size="100" round={true} src={url.file}/>
          </li>
        </div>
        <div>
          <Button style={{ float: 'right' }} size="sm" variant="outline-danger" onClick={() => this.handleDelete(url._id)}>Delete</Button>
          <Link style={{ float: 'right' }} to={ 'uploads/' + url._id }><Button size="sm" variant="outline-success">Update</Button></Link>
        </div>
      </div>
    ))
    // const pictures = this.state.file.map(picture => (
    //   <li key={picture._id}>
    //     <img src={this.state.picture} />
    //   </li>
    // ))
    // <div>
    //   <h3>All the file</h3>
    //   <aside style={thumbsContainer}>
    //     {url}
    //   </aside>
    // </div>
    return (
      <div>
        <h3>All the file</h3>
        <aside style={thumbsContainer}>
          {url}
        </aside>
      </div>
    )
  }
}

export default Pictures
