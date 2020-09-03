import React from 'react';
import { Wrapper, Label } from './styles';

const Button = ({ title, ...rest }) => {
    return (
        <Wrapper {...rest}>
            <Label>{title}</Label>
        </Wrapper>
    );
};

export default Button;
