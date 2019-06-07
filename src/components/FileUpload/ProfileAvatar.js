import Avatar from 'react-avatar'
import React from 'react'

const ProfileAvatar = () => {
  return (
    <div>
      <Avatar size="100" round={true} />
      <Avatar githubHandle="sitebase" size={150} round="20px" />
    </div>
  )
}

export default ProfileAvatar
