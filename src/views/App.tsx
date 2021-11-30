import { useReducer, VFC } from 'react'
import useMedia from 'react-use/lib/useMedia'
import CardStack from '../components/CardStack'
import EmptyResults from '../components/EmptyResults'
import SkeletonCardStack from '../components/SkeletonCardStack'
import { PreferencesContext } from '../contexts/PreferencesContext'
import Preferences from '../fragments/Preferences'
import { useDiscovery } from '../hooks/useDiscovery'
import AppLayout from '../layouts/app/Layout'
import { fetchPreferences } from '../lib/preferences'
import { preferencesReducer } from '../reducers/preferences'

const App: VFC = () => {
  const preferences = useReducer(preferencesReducer, fetchPreferences())
  const { isLoading, fetch, items } = useDiscovery(preferences[0])
  const isMd = useMedia('(min-width: 768px)')

  return (
    <PreferencesContext.Provider value={preferences}>
      <AppLayout>
        <div className="flex flex-1">
          <Preferences fetch={fetch} isLoading={isLoading} />

          <section className="relative flex flex-col flex-1">
            {isMd && (
              <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900" />
            )}

            <div className="grid flex-1 w-full place-items-center">
              {!isLoading && !!items && <CardStack items={items} />}
              {isLoading && <SkeletonCardStack />}
              {!isLoading && !items && <EmptyResults />}
            </div>

            {isMd && (
              <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900" />
            )}
          </section>
        </div>
      </AppLayout>
    </PreferencesContext.Provider>
  )
}

export default App
