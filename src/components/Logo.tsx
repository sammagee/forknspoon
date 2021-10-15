import { VFC } from 'react'
import Icon from './Icon'

interface LogoProps {
  className?: string
}

const Logo: VFC<LogoProps> = ({ className }) => {
  return <Icon className={className} name="logo" />
}

export default Logo
