import { FC, useRef } from 'react'
import Sheet, { SheetRef } from 'react-modal-sheet'
import { useMedia } from 'react-use'
import Button from '../components/Button'
import Input from '../components/Input'
import LoadingIndicator from '../components/LoadingIndicator'
import Logo from '../components/Logo'
import RadioGroup from '../components/RadioGroup'
import Select from '../components/Select'
import configPreferences from '../config/preferences'
import { usePreferences } from '../hooks/usePreferences'

interface PreferencesProps {
  fetch(): void
  isLoading: boolean
}

const Preferences: FC<PreferencesProps> = ({ fetch, isLoading }) => {
  const isLg = useMedia('(min-width: 1024px)')
  const ref = useRef<SheetRef>()
  const snapTo = (i: number) => ref.current?.snapTo(i)
  const [preferences, dispatchPreference] = usePreferences()
  const setPreference = (
    key: keyof typeof configPreferences,
    value: string | null
  ) => dispatchPreference({ key, value })

  return isLg ? (
    <aside className="flex-col hidden w-full max-w-xs px-4 py-4 space-y-3 bg-gray-100 dark:bg-gray-800 lg:flex">
      <header className="flex items-center h-12 ml-3">
        <h2 className="text-sm font-medium text-gray-600 uppercase dark:text-gray-400">
          Preferences
        </h2>
      </header>

      <div>
        <RadioGroup
          label="Dining Option"
          description="Are we eating in or out today?"
          onChange={(value) => setPreference('diningOptions', value)}
          options={configPreferences.diningOptions}
          value={preferences.diningOptions}
        />
      </div>

      <div>
        <Input
          label="Search"
          description="Anything specific you'd like?"
          handleInput={(value) => setPreference('search', value)}
          placeholder="Chicken, Pasta, Soup, etc..."
          value={preferences.search}
        />
      </div>

      <div>
        <Select
          label="Meal"
          description="What meal will it be?"
          onChange={(value) => setPreference('mealTypes', value)}
          options={configPreferences.mealTypes}
          value={preferences.mealTypes}
        />
      </div>

      <div>
        <Select
          label="Cuisine"
          description="What sort of cuisine would you like?"
          onChange={(value) => setPreference('cuisines', value)}
          options={configPreferences.cuisines}
          value={preferences.cuisines}
        />
      </div>

      <div>
        <Select
          label="Dietary Restrictions"
          description="Are you on a diet?"
          onChange={(value) => setPreference('diets', value)}
          options={configPreferences.diets}
          value={preferences.diets}
        />
      </div>

      <div>
        <Select
          label="Health Restrictions"
          description="Any health restrictions?"
          onChange={(value) => setPreference('restrictions', value)}
          options={configPreferences.restrictions}
          value={preferences.restrictions}
        />
      </div>

      <div className="flex flex-col justify-end flex-1">
        <Button
          disabled={isLoading}
          icon={(cn) =>
            !isLoading ? (
              <Logo className={cn} />
            ) : (
              <LoadingIndicator size={cn} />
            )
          }
          onClick={fetch}
        >
          Let&apos;s eat
        </Button>
      </div>
    </aside>
  ) : (
    <Sheet
      ref={ref}
      snapPoints={[600, 400, 120]}
      initialSnap={2}
      onClose={() => snapTo(2)}
      isOpen
    >
      <Sheet.Container>
        <Sheet.Header />

        <Sheet.Content>
          <div className="sticky top-0 z-10 w-full bg-white dark:bg-gray-800">
            <Button
              className="sticky top-0 z-10 w-full"
              disabled={isLoading}
              icon={(cn) =>
                !isLoading ? (
                  <Logo className={cn} />
                ) : (
                  <LoadingIndicator size={cn} />
                )
              }
              onClick={fetch}
            >
              Let&apos;s eat
            </Button>

            <div className="absolute inset-x-0 h-4 top-full bg-gradient-to-b from-white dark:from-gray-800" />
          </div>

          <div className="mt-8 space-y-3 border-t border-gray-100 dark:border-gray-700">
            <div className="mt-8">
              <RadioGroup
                label="Dining Option"
                description="Are we eating in or out today?"
                onChange={(value) => setPreference('diningOptions', value)}
                options={configPreferences.diningOptions}
                value={preferences.diningOptions}
              />
            </div>

            <div>
              <Input
                label="Search"
                description="Anything specific you'd like?"
                handleInput={(value) => setPreference('search', value)}
                placeholder="Chicken, Pasta, Soup, etc..."
                value={preferences.search}
              />
            </div>

            <div>
              <Select
                label="Meal"
                description="What meal will it be?"
                onChange={(value) => setPreference('mealTypes', value)}
                options={configPreferences.mealTypes}
                value={preferences.mealTypes}
              />
            </div>

            <div>
              <Select
                label="Cuisine"
                description="What sort of cuisine would you like?"
                onChange={(value) => setPreference('cuisines', value)}
                options={configPreferences.cuisines}
                value={preferences.cuisines}
              />
            </div>

            <div>
              <Select
                label="Dietary Restrictions"
                description="Are you on a diet?"
                onChange={(value) => setPreference('diets', value)}
                options={configPreferences.diets}
                value={preferences.diets}
              />
            </div>

            <div>
              <Select
                label="Health Restrictions"
                description="Any health restrictions?"
                onChange={(value) => setPreference('restrictions', value)}
                options={configPreferences.restrictions}
                value={preferences.restrictions}
              />
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  )
}

export default Preferences
