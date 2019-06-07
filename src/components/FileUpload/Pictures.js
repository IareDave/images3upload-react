import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
// import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'
import './Preview.css'

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
    // const thumbsContainer = {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
    //   marginTop: 16
    // }
    //
    // const thumb = {
    //   display: 'inline-flex',
    //   borderRadius: 2,
    //   border: '1px solid #eaeaea',
    //   marginBottom: 8,
    //   marginRight: 8,
    //   width: 200,
    //   height: 200,
    //   padding: 4,
    //   boxSizing: 'border-box'
    // }
    //
    // const thumbInner = {
    //   display: 'flex',
    //   minWidth: 0,
    //   overflow: 'hidden'
    // }
    //
    // const img = {
    //   display: 'block',
    //   width: 'auto',
    //   height: '100%'
    // }
    const url = this.state.upload.map(url => (
      <li key={url._id}>
        <li key={url._id}>
          <div >
            <img src={url.file} />
          </div>
        </li>
        <Button variant="danger" onClick={() => this.handleDelete(url._id)}>Delete Picture</Button>
        <Link to={ '/uploads/' + url._id }><Button variant="success">Update A Movie</Button></Link>
      </li>
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
        <div className="con"></div>

        <section className="one">
          <div className="wrapper">{url}</div>
        </section>

        <section className="two">
          <div className="wrapper">{url}</div>
        </section>

        <section className="three">
          <div className="wrapper">{url}</div>
        </section>

        <section className="four">
          <div className="wrapper">{url}</div>
        </section>
      </div>
    )
  }
}

export default Pictures
