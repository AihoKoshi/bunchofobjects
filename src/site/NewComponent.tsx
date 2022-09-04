import React from 'react';
import {StudentType} from '../App';
import {TopCarsType} from '../App';

// export type StudentType = {
//     id: number
//     name: string
//     age: number
// }

// export type TopCarsType = {
//     manufacturer: string
//     model: string
// }

export type NewComponentType = {
    students: Array<StudentType>
    topCars: TopCarsType[]
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            {props.topCars.map((object, index)=> {
                        return (
                            <table>
                                <tr key={index}>{object.manufacturer}
                                    <th key={index}>{object.model}
                                    </th>
                                </tr>
                            </table>
                        )
                    })}


            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <li
                            key={objectFromStudentArray.id}>
                            <span>{objectFromStudentArray.name}</span>
                            <span> age: {objectFromStudentArray.age}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}