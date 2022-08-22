import React from 'react';

export type BodyType = {
    titleBody: string
}

export const Body = (props: BodyType) => {
    return (
        <>{props.titleBody}</>
    )
}