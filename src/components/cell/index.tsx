import React from 'react'
import styles from './styles.module.css'
import { contribsLevel } from '../../utils/helpers/contribsLevel'

interface CellProps {
  date?: string
  contribs: number
  title: string
  selected?: boolean
  onClick: () => void
}

const Cell: React.FC<CellProps> = ({ date, contribs, selected, onClick, title }) => {
  return (
    <div className={`${styles.cell} ${styles['level-' + contribsLevel(contribs)]} ${selected ? styles.selected : ''}`} onClick={onClick}>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        {date && <span>{date}</span>}
      </div>
    </div>
  )
}

export default Cell