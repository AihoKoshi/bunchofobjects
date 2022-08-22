import React from 'react';

export type FooterType = {
    titleFooter: string
}

export const Footer = (props: FooterType) => {
    return (
        <>{props.titleFooter}</>
    )
}