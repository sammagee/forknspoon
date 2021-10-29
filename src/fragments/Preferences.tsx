import { FC, useState } from 'react'
import preferences from '../../config/preferences'
import Button from '../components/Button'
import RadioGroup from '../components/RadioGroup'
import Select from '../components/Select'

const Preferences: FC = () => {
  const [diningOption, setDiningOption] = useState(preferences.diningOptions[0])
  const [cuisine, setCuisine] = useState(preferences.cuisines[0])
  const [restriction, setRestriction] = useState(preferences.restrictions[0])

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
          onChange={setDiningOption}
          options={preferences.diningOptions}
          value={diningOption}
        />
      </div>

      <div className="mt-3">
        <Select
          label="Cuisine"
          description="What sort of cuisine would you like?"
          onChange={setCuisine}
          options={preferences.cuisines}
          value={cuisine}
        />
      </div>

      <div className="mt-3">
        <Select
          label="Dietary Restrictions"
          description="Any dietary restrictions?"
          onChange={setRestriction}
          options={preferences.restrictions}
          value={restriction}
        />
      </div>

      <div className="flex flex-col justify-end flex-1">
        <Button icon="logo">Let&apos;s eat</Button>
      </div>
    </aside>
  )
}

export default Preferences
