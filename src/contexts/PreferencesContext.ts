import { createContext, Dispatch } from 'react'
import { Preferences } from '../types/Preferences'

export const PreferencesContext = createContext<
  [any, Dispatch<{ key: keyof Preferences; value: string | null }>] | any[]
>([])
