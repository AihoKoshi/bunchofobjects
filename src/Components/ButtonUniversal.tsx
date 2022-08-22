import React from 'react';

type ButtonUniversalType = {
    name: string
    callBack: () => void
}

export const ButtonUniversal = (props: ButtonUniversalType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}