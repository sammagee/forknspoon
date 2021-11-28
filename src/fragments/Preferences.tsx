import { FC } from 'react'
import Button from '../components/Button'
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
  const [preferences, dispatchPreference] = usePreferences()
  const setPreference = (
    key: keyof typeof configPreferences,
    value: string | null
  ) => dispatchPreference({ key, value })

  return (
    <aside className="flex-col hidden w-full max-w-xs px-4 py-4 bg-gray-100 dark:bg-gray-800 lg:flex">
      <header className="flex items-center h-12 ml-3">
        <h2 className="text-sm font-medium text-gray-600 uppercase dark:text-gray-400">
          Preferences
        </h2>
      </header>

      <div className="mt-3">
        <RadioGroup
          label="Dining Option"
          description="Are we eating in or out today?"
          onChange={(value) => setPreference('diningOptions', value)}
          options={configPreferences.diningOptions}
          value={preferences.diningOptions}
        />
      </div>

      <div className="mt-3">
        <Select
          label="Meal"
          description="What meal will it be?"
          onChange={(value) => setPreference('mealTypes', value)}
          options={configPreferences.mealTypes}
          value={preferences.mealTypes}
        />
      </div>

      <div className="mt-3">
        <Select
          label="Cuisine"
          description="What sort of cuisine would you like?"
          onChange={(value) => setPreference('cuisines', value)}
          options={configPreferences.cuisines}
          value={preferences.cuisines}
        />
      </div>

      <div className="mt-3">
        <Select
          label="Dietary Restrictions"
          description="Are you on a diet?"
          onChange={(value) => setPreference('diets', value)}
          options={configPreferences.diets}
          value={preferences.diets}
        />
      </div>

      <div className="mt-3">
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
  )
}

export default Preferences
