import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { App } from './App'

describe('Users app', () => {
  it('should render title', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
    )

    expect(screen.getByText('BOB Fullstack test')).toBeInTheDocument()
  })
})
