import React, { useEffect, useState, useMemo } from 'react'
import { addDays, format, getDaysInMonth } from 'date-fns'

import { getFirstDate } from '../../utils/helpers/dates'
import { CELLS_NUMBER, MONTHS } from '../../const'
import Cell from '../cell'
import styles from './styles.module.css'

interface ContributionGraphProps {
    data: { [k: string]: number }
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({ data }) => {
    const [dates, setDates] = useState<{ date: string, contribs: number }[]>()
    const [selected, setSelected] = useState<string | null>()

    // data of months bar
    const months = useMemo(() => {
        if (!dates?.length) return

        const firstDate = getFirstDate()

        const newMonths = []
        const firstMonth = firstDate.getMonth()

        const percent = getDaysInMonth(firstDate) / 100
        // how wide will the first month be from the original
        let firstMonthPercent = (getDaysInMonth(firstDate) - firstDate.getDate()) / percent

        if (firstMonthPercent < 40) {
            firstMonthPercent = 0
        }

        for (let i = firstMonth; i !== firstMonth + 12; i++) {
            if (firstMonthPercent === 0) {
                // skip first months title
                newMonths.push({ month: MONTHS[(i + 1) % 12], percent: 100 })
            } else {
                newMonths.push({ month: MONTHS[i % 12], percent: i === firstMonth ? firstMonthPercent : 100 })
            }
        }

        return newMonths

    }, [dates])

    useEffect(() => {
        // initialize dates
        if (dates?.length) return

        const formattedDays = []
        const firstDate = getFirstDate()

        for (let i = 0; i < CELLS_NUMBER; i++) {
            const date = addDays(firstDate, i)
            const contribs = format(date, 'yyyy-MM-dd')
            formattedDays.push({ date: date.toDateString(), contribs: data[contribs] || 0 })
        }

        setDates(formattedDays)
    }, [dates])

    const selectHandler = (id: string) => {
        if (selected === id) setSelected(null)
        else setSelected(id)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.days}>
                <span>Пн</span>
                <span>Ср</span>
                <span>Пт</span>
            </div>
            <div className={styles.tableWrapper}>
                {months &&
                    <div className={styles.months}>
                        {months.map((item: any) => <div key={item.month} style={{ width: `${item.percent}%` }}>{item.month}</div>)}
                    </div>
                }
                {dates &&
                    <div className={styles.table}>
                        {dates.map(item => <Cell key={item.date} date={item.date} contribs={item.contribs} onClick={selectHandler} selected={selected === item.date} />)}
                    </div>
                }
            </div>
        </div>
    )
}

export default ContributionGraph
