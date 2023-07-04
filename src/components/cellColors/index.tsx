import React, { useState } from 'react'
import styles from './styles.module.css'
import Cell from '../cell'

const CellColors = () => {
    const [selected, setSelected] = useState<number | null>()

    const selectHandler = (id: number) => {
        if (selected === id) setSelected(null)
        else setSelected(id)
    }

    return (
        <div className={styles.colorsWrapper}>
            <span>Меньше</span>
            <div className={styles.colors}>
                <Cell contribs={0} title='No contributions' selected={selected === 0} onClick={() => selectHandler(0)} />
                <Cell contribs={9} title='1-9 contributions' selected={selected === 1} onClick={() => selectHandler(1)} />
                <Cell contribs={11} title='10-19 contributions' selected={selected === 2} onClick={() => selectHandler(2)} />
                <Cell contribs={22} title='20-29 contributions' selected={selected === 3} onClick={() => selectHandler(3)} />
                <Cell contribs={33} title='30+ contributions' selected={selected === 4} onClick={() => selectHandler(4)} />
            </div>
            <span>Больше</span>
        </div>
    )
}

export default CellColors