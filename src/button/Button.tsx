import React from 'react';
import {MouseEvent} from 'react';

export const Button = () => {
    const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello. My name is Vasya');
    };
    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hi. I am Ivan')
    }
    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (stoDvesti: number) => {
        console.log(stoDvesti)
    }
    return (
        <div>
            <div>
                <button onClick={(event) => (console.log('Hello'))}>MyYouTubeChannel-1</button>
                <button onClick={myFirstSubscriber}>MyYouTubeChannel-2</button>
                <button onClick={mySecondSubscriber}>MyYouTubeChannel-3</button>
                <button onClick={(event) => onClickHandler('Vasya')}>MyYouTubeChannel-4</button>
                <button onClick={(event) => onClickHandler('Ivan')}>MyYouTubeChannel-5</button>
                <button onClick={(event) => {
                    onClickHandler('VASYA')
                }}>MyYouTubeChannel-6
                </button>
                <button onClick={(event) => {
                    onClickHandler('IVAN')
                }}>MyYouTubeChannel-7
                </button>
            </div>
            <div>
                <button onClick={foo1}>1</button>
                <button onClick={(event)=>foo2(100200)}>2</button>
            </div>
        </div>
    )
}