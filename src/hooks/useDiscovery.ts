import { useRecipes } from './useRecipes'
import { useRestaurants } from './useRestaurants'

export const useDiscovery = (preferences: any) => {
  const {
    isLoading: isLoadingRecipes,
    recipes,
    fetchRecipes,
  } = useRecipes(preferences)
  const {
    isLoading: isLoadingRestaurants,
    restaurants,
    fetchRestaurants,
  } = useRestaurants(preferences)

  return {
    isLoading:
      preferences.diningOptions === 'recipe'
        ? isLoadingRecipes
        : isLoadingRestaurants,
    items: preferences.diningOptions === 'recipe' ? recipes : restaurants,
    fetch:
      preferences.diningOptions === 'recipe' ? fetchRecipes : fetchRestaurants,
  }
}
