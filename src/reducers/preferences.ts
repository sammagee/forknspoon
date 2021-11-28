import preferences from '../config/preferences'

const setPreference = (key: string, value: string) => {
  localStorage.setItem(
    'preferences',
    JSON.stringify({
      ...JSON.parse(localStorage.getItem('preferences') || ''),
      [key]: value,
    })
  )
}

export const preferencesReducer = (
  state: any,
  preference: { key: keyof typeof preferences; value: string }
) => {
  if (typeof window === 'undefined') return state
  else setPreference(preference.key, preference.value)
  return { ...state, ...JSON.parse(localStorage.getItem('preferences') || '') }
}
