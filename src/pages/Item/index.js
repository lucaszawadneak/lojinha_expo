import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import {
    Container,
    Scroll,
    ImageHolder,
    TextHolder,
    Title,
    Price,
    Label,
    SubLabel,
    LogoHolder,
    Logo,
} from './styles';
import Button from '~/components/Button';

const Item = ({ navigation, route }) => {
    const { item } = route.params;

    const { width } = Dimensions.get('window');

    return (
        <Container>
            <Scroll showsVerticalScrollIndicator={false}>
                <ImageHolder
                    source={require('~/temp/assets/img/camisa.jpg')}
                    width={width - 40}
                />
                <Title>{item.title}</Title>
                <TextHolder>
                    <Price>{item.price_formatted}</Price>
                    <Label>a unidade</Label>
                </TextHolder>
                <SubLabel>{`Vendido por ${item.seller.name}`}</SubLabel>
                <Button title="Comprar" />
                <Label>Descrição</Label>
                <SubLabel>{item.description}</SubLabel>
                <LogoHolder>
                    <Logo source={require('~/assets/img/logo_small.png')} />
                </LogoHolder>
            </Scroll>
        </Container>
    );
};

export default Item;

Item.propTypes = {
    item: {
        title: PropTypes.string.isRequired,
        price_formatted: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        seller: {
            name: PropTypes.string.isRequired,
        },
    }.isRequired,
};
