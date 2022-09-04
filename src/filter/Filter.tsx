import React, {useState} from 'react';
import {FilterHWIgor} from './FilterHWIgor';

export type FilterType = 'All' | 'Dollars' | 'RUBLS'

export const Filter = () => {

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>('All');


    let currentMoney = money;
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'Dollars')
    } else if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknotes === 'RUBLS')
    }

    const onClickFilterHandler = (buttonName: FilterType) => {
        setFilter(buttonName)
    }
    return (
        <>
            <FilterHWIgor
                currentMoney={currentMoney}
                onClickFilterHandler={onClickFilterHandler}/>
        </>

        // <>
        //     <ul>
        //         {currentMoney.map((m, index) => {
        //                 return (
        //                     <li key={index}>
        //                         <span>{m.banknotes}</span>
        //                         <span>{m.value}</span>
        //                         <span>{m.number}</span>
        //                     </li>
        //                 )
        //             }
        //         )
        //         }
        //     </ul>
        //     <button onClick={() => onClickFilterHandler('All')}>All</button>
        //     <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
        //     <button onClick={() => onClickFilterHandler('RUBLS')}>Rubles</button>
        // </>
    )
}