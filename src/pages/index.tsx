import type { NextPage } from 'next'
import { useState } from 'react'
import App from '../views/App'
import Landing from '../views/Landing'

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return isLoggedIn ? <App /> : <Landing />
}

export default Home
