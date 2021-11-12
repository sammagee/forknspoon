import type { NextPage } from 'next'
import { useAuth } from '../hooks/useAuth'
import App from '../views/App'
import Landing from '../views/Landing'

const Home: NextPage = () => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? <App /> : <Landing />
}

export default Home
