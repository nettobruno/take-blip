import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/profile'


export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}
