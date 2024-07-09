import React from 'react'
import { useSelector } from 'react-redux'

<<<<<<< HEAD
import { selectUserById } from '../users/usersSlice'
=======
// import { selectUserById } from '../users/usersSlice'
import { selectUserById } from '../users/userSlice'

>>>>>>> origin/master

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) => selectUserById(state, userId))

  return <span>by {author ? author.name : 'Unknown author'}</span>
}