import Head from 'next/head'
import { FC } from 'react'
import CardStack from '../components/CardStack'
import IconButton from '../components/IconButton'
import Preferences from '../fragments/Preferences'
import AppLayout from '../layout/AppLayout'

const App: FC = () => {
  const images = [
    'https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=1.00xw:0.750xh;0,0.159xh&resize=1200:*',
    'https://images.immediate.co.uk/production/volatile/sites/30/2018/04/Roasted_aloo_gobi-a6671e9-scaled.jpg?quality=90&resize=556,505',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190509-coconut-chicken-curry-157-1558039780.jpg?crop=0.668xw:1.00xh;0.116xw,0&resize=480:*',
    'https://iamafoodblog.b-cdn.net/wp-content/uploads/2018/02/coconut-chicken-curry-8732w.jpg',
    'https://static01.nyt.com/images/2021/01/06/dining/04Cookbooksrex2-curry/merlin_181749069_bac75581-7b0e-4426-8d8b-1803663440fd-articleLarge.jpg',
  ]

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
                {images.map((image, index) => (
                  <div
                    className="flex h-[28rem] relative"
                    key={index}
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute inset-0 bg-white/25 dark:bg-gray-900/50" />

                    <div className="relative flex flex-1 bg-gradient-to-br from-black/10 to-black/90">
                      <div className="flex items-center justify-between p-6 mt-auto">
                        <h2 className="text-2xl font-medium text-white">
                          Coconut Chicken Curry
                        </h2>

                        <IconButton
                          className="absolute right-4 bottom-4"
                          name="info"
                          variant="secondary"
                          flat
                        />
                      </div>
                    </div>
                  </div>
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
