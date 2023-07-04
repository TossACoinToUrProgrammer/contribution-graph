import React from 'react'
import styles from './styles.module.css'

interface CellProps {
  date: string
  contribs: number
  selected?: boolean
}

const Cell: React.FC<CellProps> = ({ date, contribs, selected }) => {
  return (
    <div className={styles.cell}>
      <div className={styles.info}>
        <span className={styles.contribs}>{contribs} Contributions</span>
        <span>{date}</span>
      </div>
    </div>
  )
}

export default Cell