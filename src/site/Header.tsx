import React from 'react';

export type HeaderType = {
    titleHeader: string
}

export const Header = (props: HeaderType) => {
    return (
        <>{props.titleHeader}</>
    )
}