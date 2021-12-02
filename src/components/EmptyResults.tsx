import { usePreferences } from '../hooks/usePreferences'
import RecipeIllustration from '../illustrations/RecipeIllustration'
import RestaurantIllustration from '../illustrations/RestaurantIllustration'

const EmptyResults = () => {
  const [preferences] = usePreferences()

  return (
    <div className="grid w-full h-full max-w-sm p-12 m-4 bg-black rounded-full aspect-1 place-items-center max-h-sm bg-opacity-10">
      {preferences.diningOptions === 'recipe' ? (
        <RecipeIllustration className="grid w-full h-full place-items-center" />
      ) : (
        <RestaurantIllustration className="grid w-full h-full place-items-center" />
      )}
    </div>
  )
}

export default EmptyResults
