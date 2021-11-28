import preferences from '../config/preferences'

const DEFAULT_PREFERENCES = {
  cuisines: preferences.cuisines[0].value,
  diets: preferences.diets[0].value,
  diningOptions: preferences.diningOptions[0].value,
  mealTypes: preferences.mealTypes[0].value,
  restrictions: preferences.restrictions[0].value,
}

export const fetchPreferences = () => {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCES

  try {
    if (!localStorage.getItem('preferences'))
      localStorage.setItem('preferences', JSON.stringify(DEFAULT_PREFERENCES))
    else
      localStorage.setItem(
        'preferences',
        JSON.stringify({
          ...DEFAULT_PREFERENCES,
          ...JSON.parse(localStorage.getItem('preferences') || ''),
        })
      )
    return JSON.parse(localStorage.getItem('preferences') || '')
  } catch (_) {
    return DEFAULT_PREFERENCES
  }
}
