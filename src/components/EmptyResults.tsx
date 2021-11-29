import { usePreferences } from '../hooks/usePreferences'
import RecipeIllustration from '../illustrations/RecipeIllustration'
import RestaurantIllustration from '../illustrations/RestaurantIllustration'

const EmptyResults = () => {
  const [preferences] = usePreferences()

  return (
    <div className="grid w-full h-full max-w-sm p-12 m-4 bg-black rounded-full place-items-center max-h-sm bg-opacity-10">
      {preferences.diningOptions === 'recipe' ? (
        <RecipeIllustration className="w-full h-full" />
      ) : (
        <RestaurantIllustration className="w-full h-full" />
      )}
    </div>
  )
}

export default EmptyResults
