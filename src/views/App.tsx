import Head from 'next/head'
import { FC } from 'react'
import Card from '../components/Card'
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

          <section className="flex flex-col justify-center flex-1 p-4">
            <div className="relative flex items-center justify-center">
              {[1, 2, 3].map((val, index) => (
                <Card index={index} key={index}></Card>
              ))}
            </div>

            <footer className="flex items-center justify-between w-full max-w-md mx-auto mt-6 space-x-3">
              <div className="space-x-3">
                <IconButton
                  name="undo"
                  offsetClassName="focus-visible:offset-gray-50"
                  variant="secondary"
                  flat
                />

                <IconButton
                  name="shuffle"
                  offsetClassName="focus-visible:offset-gray-50"
                  variant="secondary"
                  flat
                />
              </div>

              <div className="space-x-3">
                <IconButton
                  name="x"
                  offsetClassName="focus-visible:offset-gray-50"
                  variant="secondary"
                  flat
                />

                <IconButton
                  name="star"
                  offsetClassName="focus-visible:offset-gray-50"
                  variant="secondary"
                  flat
                />
              </div>
            </footer>
          </section>
        </div>
      </AppLayout>
    </>
  )
}

export default App
