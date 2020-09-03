import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fcf1df;
  padding: 20px;
  border: 0px solid #ddd;
  border-bottom-width: 1px;
`;

export const CategoryHolder = styled.ScrollView`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 20px;
  margin-top: 100px;
  elevation: ${(props) => (props.visible ? 1 : 0)};
  z-index: ${(props) => (props.visible ? 1 : -1)}; ;
`;

export const Category = styled.TouchableOpacity`
  border: 0px solid #ddd;
  border-bottom-width: 1px;
  margin: 5px 0px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #000;
  opacity: 0.6;
`;

export const Scroll = styled.ScrollView``;

export const ListHolder = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const ItemHolder = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  border: 0px solid #ddd;
  border-bottom-width: 1px;
  margin: 5px 0px;
`;

export const ItemImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 10px;
`;

export const ItemTextHolder = styled.View``;

export const ItemTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ItemLabel = styled.Text`
  opacity: 0.6;
`;

export const ItemPrice = styled(ItemLabel)`
  margin-bottom: 10px;
  font-size: 16px;
  color: #ed524a;
  opacity: 1;
`;
