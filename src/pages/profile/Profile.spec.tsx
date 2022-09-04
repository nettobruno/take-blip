import { render,screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Profile from './index'

test('Profile page renders correctly', () => {
  render(
    <Profile />
  )

  expect(screen.getByTestId('profile-page')).toBeInTheDocument()
})