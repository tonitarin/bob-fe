import React, { Fragment } from 'react'

const NewUser = () => {
  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Fragment>
      <h1>New user</h1>
      <form onSubmit={onSubmit}>
        <label>
          Number of bags
          <input type="number" id="bags" name="bags" min="1" max="5" />
        </label>
        <label>
          User name
          <input type="text" id="username" name="username" />
        </label>
        <button type="submit">Create user</button>
      </form>
    </Fragment>
  )
}

export { NewUser }
