import type { NextPage } from 'next'
import PageLoader from '../components/PageLoader'
import { useAuth } from '../hooks/useAuth'
import App from '../views/App'
import Landing from '../views/Landing'

const Home: NextPage = () => {
  const { user, error } = useAuth()

  if (error) return <Landing />
  if (!user) return <PageLoader />

  return <App />
}

export default Home
