import { VFC } from 'react'
import icons from '../../config/icons'

export type IconName = keyof ReturnType<typeof icons>

interface IconProps {
  className?: string
  name: IconName
}

const Icon: VFC<IconProps> = ({ className, name }) => {
  return icons(className)[name]
}

export default Icon
