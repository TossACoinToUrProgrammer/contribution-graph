import React from 'react'
import styles from './styles.module.css'
import { contribsLevel } from '../../utils/helpers/contribsLevel'

interface CellProps {
  date: string
  contribs: number
  selected?: boolean
  onClick: (id: string) => void
}

const Cell: React.FC<CellProps> = ({ date, contribs, selected, onClick}) => {
  return (
    <div className={`${styles.cell} ${styles['level-' + contribsLevel(contribs)]} ${selected ? styles.selected : ''}`} onClick={() => onClick(date)}>
      <div className={styles.info}>
        <span className={styles.contribs}>{contribs} Contributions</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default Cell