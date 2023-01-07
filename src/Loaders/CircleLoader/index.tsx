import { FC } from 'react'
import styles from './styles.module.css'

interface Props {
  className?: string
}

const CircleLoader: FC<Props> = ({ className = '' }) => {
  return (
    <svg className={`${styles.svg} ${className}`} viewBox="0 0 50 50">
      <circle className={`${styles.circle}`} cx="25" cy="25" r="20" />
    </svg>
  )
}

CircleLoader.displayName = 'CircleLoader'

export default CircleLoader
