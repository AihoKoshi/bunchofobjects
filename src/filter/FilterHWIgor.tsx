import React from 'react';
import {FilterType} from './Filter'

type CurrentMoneyType = {
    banknotes: string
    value: number
    number: string
}
type propsType = {
    onClickFilterHandler:(buttonName: FilterType)=>void
    currentMoney: CurrentMoneyType[]
}

export const FilterHWIgor = (props: propsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((m, index) => {
                        return (
                            <li key={index}>
                                <span>{m.banknotes}</span>
                                <span>{m.value}</span>
                                <span>{m.number}</span>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <button onClick={() => props.onClickFilterHandler('All')}>All</button>
            <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
            <button onClick={() => props.onClickFilterHandler('RUBLS')}>Rubles</button>
        </>
    )
}