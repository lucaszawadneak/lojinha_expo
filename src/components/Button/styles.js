import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled(RectButton)`
  background-color: #ed524a;
  align-self: stretch;
  padding: 10px;
  elevation: 1;
  border-radius: 5px;
  margin: 10px 0px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 21px;
  text-align: center;
`;
