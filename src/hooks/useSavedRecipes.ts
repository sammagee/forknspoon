import useSWR from 'swr'
import axios from '../lib/axios'
import { Recipe } from '../types/Recipe'
import { Response } from '../types/Response'

export const useSavedRecipes = () => {
  const {
    data: savedRecipes,
    error,
    mutate,
  } = useSWR('/saved', () =>
    axios.get('/saved').then((res: Response<Recipe[]>) => res.data)
  )

  return {
    isLoading: !savedRecipes && !error,
    mutate,
    savedRecipes,
  }
}
