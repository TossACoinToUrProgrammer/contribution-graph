import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { addDays, format, isSunday, nextSunday, subDays } from 'date-fns'
import Cell from '../cell'

interface ContributionGraphProps {
    data: { [k: string]: number }
}


const ContributionGraph: React.FC<ContributionGraphProps> = ({ data }) => {
    const [days, setDays] = useState<{ date: string, contribs: number }[]>()
    const CELL_NUMBER = 357

    useEffect(() => {
        if (days?.length) return

        const formattedDays = []
        const currentDate = new Date()
        const lastDate = isSunday(currentDate) ? currentDate : nextSunday(currentDate)
        const firstDate = subDays(lastDate, CELL_NUMBER - 1)

        for (let i = 0; i < CELL_NUMBER; i++) {
            const date = addDays(firstDate, i)
            const contribs = format(date, 'yyyy-MM-dd')
            formattedDays.push({ date: date.toDateString(), contribs: data[contribs] || 0 })
        }

        setDays(formattedDays)
    }, [days])

    return (
        <div>
            {days &&
                <div className={styles.table}>
                    {days.map(item => <Cell key={item.date} date={item.date} contribs={item.contribs} />)}
                </div>
            }
        </div>
    )
}

export default ContributionGraph