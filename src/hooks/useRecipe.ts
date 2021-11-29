import { useState } from 'react'
import axios from '../lib/axios'
import { Recipe } from '../types/Recipe'

export const useRecipe = () => {
  const [isLoading, setIsLoading] = useState(false)

  const saveRecipe = (recipe: Recipe) => {
    setIsLoading(true)
    axios.post('/recipes', { data: recipe }).then(() => setIsLoading(false))
  }

  return {
    saveRecipe,
    isLoading,
  }
}
