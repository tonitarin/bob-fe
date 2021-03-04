import React from 'react'
import { render, screen } from '@testing-library/react'
import axios from 'axios'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { App } from '../../../App'

describe('Users list', () => {
  axios.get = jest.fn(() => {
    return Promise.resolve({
      data: [
        { name: 'John Doe', bags: 5 },
        { name: 'Toni', bags: 6 },
      ],
    })
  })

  it('should render one user', async () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
    )

    const user = await screen.findByText('John Doe')

    expect(user).toBeInTheDocument()
    expect(screen.getByText('Toni')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
  })
})
