import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
// import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import Img from './stylecomp'

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
  //       // .catch(console.error)
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
      display: 'inline-flex',
      borderRadius: 2,
      border: '1px solid #eaeaea',
      marginBottom: 8,
      marginRight: 8,
      width: 800,
      height: 500,
      padding: 4,
      boxSizing: 'border-box'
    }

    const thumbInner = {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden'
    }

    const url = this.state.upload.map(url => (
      <div key={url._id}>
        <div style={thumb}>
          <li style={thumbInner}>
            <div >
              <Img>
                <img onClick={() => this.handleDelete(url._id)} src={url.file} />
              </Img>
            </div>
          </li>
        </div>
        <Button variant="danger" onClick={() => this.handleDelete(url._id)}>Delete Picture</Button>
        <Link to={ 'uploads/' + url._id }><Button variant="success">Update A Movie</Button></Link>
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
