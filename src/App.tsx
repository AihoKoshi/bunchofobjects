import React, {useState} from 'react';
import './App.css';
import {Header} from './site/Header';
import {Footer} from './site/Footer';
import {Body} from './site/Body';
import {NewComponent} from './site/NewComponent';
import {Button} from './button/Button';
import {ButtonUniversal} from './Components/ButtonUniversal';
import {LearnToUseState} from './useState/useState';
import {Filter} from './filter/Filter';

export type StudentType = {
    id: number
    name: string
    age: number
}

export type TopCarsType = {
    manufacturer: string
    model: string
}



function App() {

    let students: Array<StudentType> = [
        {id: 1, name: 'Igor', age: 18},
        {id: 2, name: 'Gor', age: 19},
        {id: 3, name: 'Or', age: 20},
    ]
    const topCars: Array<TopCarsType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]

    const ButtonUniversalFOO1 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const ButtonUniversalFOO2 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const ButtonUniversalFOO3 = () => {
        console.log('I am a stupid button')
    }
    let a = 1;
    const onClickHandler = () => {
        a++;
        console.log(a)
    }
    return (
        <>

            <Filter/>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <Header titleHeader={'New Header'}/>
            <Body titleBody={'New Body'}/>
            <Footer titleFooter={'New Footer'}/>
            <NewComponent topCars={topCars} students={students}/>
            <Button/>
            <ButtonUniversal
                name={'Button Universal 1'}
                callBack={() => ButtonUniversalFOO1('VASYA', 21)}
            />
            <ButtonUniversal
                name={'Button Universal 2'}
                callBack={() => ButtonUniversalFOO2('IVAN', 25)}
            />
            <ButtonUniversal
                name={'Button Universal 3'}
                callBack={ButtonUniversalFOO3}
            />
            <LearnToUseState/>
        </>
    );
}

export default App;
