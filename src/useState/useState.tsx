import React, {useState} from 'react';

export const LearnToUseState = () => {
    // let a = 1;
    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
        if (a === 6) {
            alert('you have reached the limit')
        }
        console.log(a)
    }
    const onClickHandlerOfZeroButton = () => {
        setA(a = 1);
    }
    return (
        <>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerOfZeroButton}>0</button>
        </>
    )
}