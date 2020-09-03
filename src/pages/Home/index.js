import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '~/services/api';
import IconInput from '~/components/IconInput';
import {
  Container,
  Label,
  ListHolder,
  CategoryHolder,
  Category,
  ItemHolder,
  ItemImage,
  ItemTextHolder,
  ItemTitle,
  ItemLabel,
  ItemPrice,
} from './styles';

const Home = ({ navigation }) => {
  const [itemList, setList] = useState([]);
  const [categoryPickerVisible, setVisible] = useState(false);
  // indica se a view de selecionar categorias está visivel

  const [category, setCategory] = useState('');
  // indica a categoria selecionada

  async function loadItems() {
    const response = await api.get('/products');
    setList(response.data);
  }

  useEffect(() => {
    loadItems();
    // carrega os produtos de maneira geral
  }, []);

  const openPicker = () => {
    setVisible(!categoryPickerVisible);
  };

  const handleSelectCategory = (id) => {
    openPicker();
    setCategory(id);
  };

  return (
    <>
      <CategoryHolder
        showsVerticalScrollIndicator={false}
        visible={categoryPickerVisible}
      >
        <Category onPress={() => handleSelectCategory('> Artesanato')}>
          <ItemPrice>Artesanato</ItemPrice>
        </Category>
        <Category onPress={() => handleSelectCategory('> Vestimenta')}>
          <ItemPrice>Vestimenta</ItemPrice>
        </Category>
        <Category onPress={() => handleSelectCategory('> Livros')}>
          <ItemPrice>Livros</ItemPrice>
        </Category>
        <Category onPress={() => handleSelectCategory('> Variedades')}>
          <ItemPrice>Variedades</ItemPrice>
        </Category>
      </CategoryHolder>
      <Container>
        <Label>O que você gostaria de procurar?</Label>
        <IconInput
          placeholder="Pesquisar"
          leftIcon="magnify"
          rightIcon="chevron-down-circle"
          onPress={openPicker}
        />
      </Container>
      <ListHolder>
        <Label>{`Início ${category}`}</Label>
        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <ItemHolder onPress={() => navigation.navigate('Item', { item })}>
              <ItemImage source={require('~/temp/assets/img/camisa.jpg')} />
              <ItemTextHolder>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>{item.price_formatted}</ItemPrice>
                <ItemLabel>Vendido por</ItemLabel>
                <ItemLabel>{item.seller.name}</ItemLabel>
              </ItemTextHolder>
            </ItemHolder>
          )}
        />
      </ListHolder>
    </>
  );
};

export default Home;
