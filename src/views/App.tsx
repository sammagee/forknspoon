import Head from 'next/head'
import { FC } from 'react'
import CardStack from '../components/CardStack'
import IconButton from '../components/IconButton'
import Preferences from '../fragments/Preferences'
import AppLayout from '../layout/AppLayout'

const App: FC = () => {
  return (
    <>
      <Head>
        <title>Fork &amp; Spoon</title>
        <meta
          name="description"
          content="Eliminate your food indecisiveness, save and share recipes, and more."
        />
      </Head>

      <AppLayout>
        <div className="flex flex-1">
          <Preferences />

          <section className="relative flex flex-col justify-center flex-1 p-4">
            <div className="flex items-center justify-center flex-1">
              <CardStack onVote={(item, vote) => console.log(item.props, vote)}>
                {[...(Array(5) as any).keys()].map((val) => (
                  <div key={val} />
                ))}
              </CardStack>
            </div>

            <footer className="flex items-center justify-between w-full max-w-md mx-auto mt-6 space-x-3">
              <div className="space-x-3">
                <IconButton name="undo" variant="secondary" flat />

                <IconButton name="shuffle" variant="secondary" flat />
              </div>

              <div className="space-x-3">
                <IconButton name="x" variant="secondary" flat />

                <IconButton name="star" variant="secondary" flat />
              </div>
            </footer>
          </section>
        </div>
      </AppLayout>
    </>
  )
}

export default App
