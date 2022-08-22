import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Footer} from './site/Footer';
import {Body} from './site/Body';
import {NewComponent, TopCarsType} from './site/NewComponent';
import {Button} from './button/Button';
import {ButtonUniversal} from './Components/ButtonUniversal';

function App() {
    // let students: Array<StudentType> = [
    //     {id: 1, name: 'Igor', age: 18},
    //     {id: 2, name: 'Gor', age: 19},
    //     {id: 3, name: 'Or', age: 20},
    // ]
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
    return (
        <>
            <Header titleHeader={'New Header'}/>
            <Body titleBody={'New Body'}/>
            <Footer titleFooter={'New Footer'}/>
            <NewComponent topCars={topCars}/>
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
                callBack={ButtonUniversalFOO3}/>
        </>
    );
}

export default App;
