import { useState } from 'react'
import axios from '../lib/axios'
import { Response } from '../types/Response'
import { Restaurant } from '../types/Restaurant'

export const useRestaurants = (preferences: any) => {
  const [isLoading, setIsLoading] = useState(false)
  const [restaurants, setRestaurants] = useState<Restaurant[]>()

  const fetchRestaurants = () => {
    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {
          coords: { latitude, longitude },
        } = pos
        const location = `${latitude},${longitude}`

        axios
          .get('/restaurants', { params: { ...preferences, location } })
          .then((res: Response<Restaurant[]>) => {
            setRestaurants(res.data)
            setIsLoading(false)
          })
      },
      () => setIsLoading(false),
      {
        enableHighAccuracy: true,
      }
    )
  }

  return {
    fetchRestaurants,
    isLoading,
    restaurants,
  }
}
