import { render,screen } from '@testing-library/react'
import nock from 'nock'
import '@testing-library/jest-dom'

import Home from './index'

test('Home page renders correctly', () => {
  render(
    <Home />
  )

  expect(screen.getByTestId('home-page')).toBeInTheDocument()
})