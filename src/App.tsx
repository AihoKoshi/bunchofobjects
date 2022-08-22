import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Footer} from './site/Footer';
import {Body} from './site/Body';
import {NewComponent, TopCarsType} from './site/NewComponent';

function App() {
    // let students: Array<StudentType> = [
    //     {id: 1, name: 'Igor', age: 18},
    //     {id: 2, name: 'Gor', age: 19},
    //     {id: 3, name: 'Or', age: 20},
    // ]
    const topCars: Array<TopCarsType> = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
    ]
    return (
        <>
            <Header titleHeader={'New Header'}/>
            <Body titleBody={'New Body'}/>
            <Footer titleFooter={'New Footer'}/>
            <NewComponent topCars={topCars}/>
        </>
    );
}

export default App;
