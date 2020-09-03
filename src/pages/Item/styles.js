import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Scroll = styled.ScrollView``;

export const ImageHolder = styled.Image`
  height: ${(props) => props.width};
  width: ${(props) => props.width};
  border-radius: 20px;
  align-self: center;
  margin: 10px 0px;
`;

export const TextHolder = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 21px;
`;

export const Price = styled.Text`
  font-size: 24px;
  margin: 5px 0px;
  color: #ed524a;
  margin-right: 5px;
`;

export const Label = styled(Price)`
  color: #000;
  opacity: 0.7;
  font-size: 18px;
`;

export const SubLabel = styled.Text`
  color: #000;
  opacity: 0.6;
  font-size: 16px;
`;

export const LogoHolder = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Logo = styled.Image``;
