import type { NextPage } from 'next'
import { useState } from 'react'
import App from '../components/App'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return isLoggedIn ? <App /> : <Landing />
}

export default Home
