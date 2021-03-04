import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUsers } from '../../actions'

import './UsersList.css'

const UsersList = () => {
  const users = useSelector(({ users }) => users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="users-list">
      {users.map(({ name, bags }) => (
        <div key={name} className="users-list__card">
          <p>
            <b>Name:</b> {name}
          </p>
          <p>
            <b>Bags:</b> {bags}
          </p>
        </div>
      ))}
    </div>
  )
}

export { UsersList }
