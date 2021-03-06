import { ReactNode } from 'react'

export interface Preference {
  display: string
  value: string | null
  icon?: ((className: string) => ReactNode) | ReactNode
}

export interface Preferences {
  search: string | null
  cuisines: Preference[]
  diets: Preference[]
  diningOptions: Preference[]
  mealTypes: Preference[]
  restrictions: Preference[]
}
