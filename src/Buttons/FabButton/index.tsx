import { FC, PropsWithChildren, useState } from 'react'
import styles from './styles.module.css'
import { FaHeart, FaPlus, FaAngular, FaGithubSquare } from 'react-icons/fa'

const IconButton: FC<PropsWithChildren> = ({ children }) => (
  <button className={styles.icon}>{children}</button>
)

const FabButton: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={`${styles.fab} ${isOpen ? styles.open : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <FaPlus className={styles.icon} />
      </button>
      <div className={`${styles.menu}`}>
        <IconButton>
          <FaHeart />
        </IconButton>
        <IconButton>
          <FaAngular />
        </IconButton>
        <IconButton>
          <FaGithubSquare />
        </IconButton>
      </div>
    </div>
  )
}

export default FabButton
