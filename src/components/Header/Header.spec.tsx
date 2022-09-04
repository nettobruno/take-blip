import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from './index'

test('header renders correctly', () => {
  render(
    <Header />
  )

  expect(screen.getByAltText('Logo Take Blip')).toBeInTheDocument()
})