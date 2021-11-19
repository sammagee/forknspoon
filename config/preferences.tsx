import { DocumentTextIcon, OfficeBuildingIcon } from '@heroicons/react/solid'
import { ReactNode } from 'react'

interface Preference {
  display: string
  value: string | null
  icon?: ((className: string) => ReactNode) | ReactNode
}

interface Preferences {
  cuisines: Preference[]
  diningOptions: Preference[]
  restrictions: Preference[]
}

const preferences: Preferences = {
  cuisines: [
    {
      display: 'All',
      value: null,
    },
    {
      display: 'American',
      value: 'american',
    },
    {
      display: 'Chinese',
      value: 'chinese',
    },
    {
      display: 'Continental',
      value: 'continental',
    },
    {
      display: 'Cuban',
      value: 'cuban',
    },
    {
      display: 'French',
      value: 'french',
    },
    {
      display: 'Greek',
      value: 'greek',
    },
    {
      display: 'Indian',
      value: 'indian',
    },
    {
      display: 'Indonesian',
      value: 'indonesian',
    },
    {
      display: 'Italian',
      value: 'italian',
    },
    {
      display: 'Japanese',
      value: 'japanese',
    },
    {
      display: 'Korean',
      value: 'korean',
    },
    {
      display: 'Lebanese',
      value: 'lebanese',
    },
    {
      display: 'Malaysian',
      value: 'malaysian',
    },
    {
      display: 'Mexican',
      value: 'mexican',
    },
    {
      display: 'Pakistani',
      value: 'pakistani',
    },
    {
      display: 'Russian',
      value: 'russian',
    },
    {
      display: 'Singapore',
      value: 'singapore',
    },
    {
      display: 'Spanish',
      value: 'spanish',
    },
    {
      display: 'Thai',
      value: 'thai',
    },
    {
      display: 'Tibetan',
      value: 'tibetan',
    },
    {
      display: 'Vietnamese',
      value: 'vietnamese',
    },
  ],

  diningOptions: [
    {
      display: 'Recipe',
      value: 'recipe',
      icon: (cn) => <DocumentTextIcon className={cn} />,
    },
    {
      display: 'Restaurant',
      value: 'restaurant',
      icon: (cn) => <OfficeBuildingIcon className={cn} />,
    },
  ],

  restrictions: [
    {
      display: 'None',
      value: null,
    },
    {
      display: 'Allergies',
      value: 'allergies',
    },
    {
      display: 'Dairy-Free',
      value: 'dairy-free',
    },
    {
      display: 'Diabetic',
      value: 'diabetic',
    },
    {
      display: 'Gluten Sensitivity',
      value: 'gluten sensitivity',
    },
    {
      display: 'Keto',
      value: 'keto',
    },
    {
      display: 'Kosher',
      value: 'kosher',
    },
    {
      display: 'Lactose Intolerant',
      value: 'lactose intolerant',
    },
    {
      display: 'Low Carb',
      value: 'low carb',
    },
    {
      display: 'Vegan',
      value: 'vegan',
    },
    {
      display: 'Vegetarian',
      value: 'vegetarian',
    },
  ],
}

export default preferences
