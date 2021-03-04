import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import axios from 'axios'

import { App } from '../../../App'

describe('New user page', () => {
  it('should render new user page', () => {
    window.history.pushState({}, 'New user', '/new')
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
    )

    expect(screen.getByText('New user')).toBeInTheDocument()
  })

  it('should appear a bag number selector and have limits', () => {
    window.history.pushState({}, 'New user', '/new')
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
    )

    const bagSelector = screen.getByLabelText('Number of bags')

    expect(bagSelector).toBeInTheDocument()
    expect(bagSelector).toHaveAttribute('min', '1')
    expect(bagSelector).toHaveAttribute('max', '5')
  })

  it('should appear a user name input', () => {
    window.history.pushState({}, 'New user', '/new')
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
    )

    const userNameInput = screen.getByLabelText('User name')

    expect(userNameInput).toBeInTheDocument()
  })

  it('should appear a create button', () => {
    window.history.pushState({}, 'New user', '/new')
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
    )

    const createUserButton = screen.getByRole('button')

    expect(createUserButton).toBeInTheDocument()
  })

  it('should button on click make an API call with user values', () => {
    axios.post = jest.fn()
    window.history.pushState({}, 'New user', '/new')
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
    )

    const createUserButton = screen.getByRole('button')
    fireEvent.click(createUserButton)

    expect(axios.post).toHaveBeenCalled()
  })
})
