import { VFC } from 'react'
import LoadingIndicator from './LoadingIndicator'

const PageLoader: VFC = () => {
  return (
    <section className="grid w-screen h-screen place-items-center">
      <LoadingIndicator size="w-10 h-10" />
    </section>
  )
}

export default PageLoader
