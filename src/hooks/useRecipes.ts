import { useState } from 'react'
import axios from '../lib/axios'
import { Recipe } from '../types/Recipe'
import { Response } from '../types/Response'

export const useRecipes = (preferences: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [recipes, setRecipes] = useState<Recipe[]>()

  const fetchRecipes = () => {
    setIsLoading(true)
    axios
      .get('/recipes', { params: preferences })
      .then((res: Response<{ hits: { recipe: Recipe }[] }>) => {
        setRecipes(res.data.hits.map((hit) => hit.recipe))
        setIsLoading(false)
      })
  }

  return {
    fetchRecipes,
    isLoading,
    recipes,
  }
}
