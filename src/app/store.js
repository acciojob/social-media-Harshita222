<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
=======

import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postSlice'
import usersReducer from '../features/users/userSlice'
>>>>>>> origin/master
import notificationsReducer from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
<<<<<<< HEAD
})
=======
})
>>>>>>> origin/master
