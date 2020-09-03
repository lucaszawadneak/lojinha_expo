import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 5px 0px;
`;

export const Wrapper = styled.TextInput`
  border: 1px solid #ddd;
  align-self: stretch;
  background-color: #fff;
  padding: 10px 15px;
  align-self: stretch;
  width: 77%;
  font-size: 18px;
  width: ${(props) => props.width};
  border-right-width: 0px;
  border-left-width: ${(props) => (props.leftIconEnabled ? 0 : 1)};
`;

export const IconHolder = styled.View`
  background-color: #fff;
  padding: 10px 15px;
  align-items: center;
  justify-content: center;
  width: 60px;
  border: 1px solid #ddd;
  border-left-width: ${(props) => (props.rightSide ? 0 : 1)};
  border-right-width: ${(props) => (props.leftSide ? 0 : 1)};
`;

export const TouchableHolder = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px 15px;
  align-items: center;
  justify-content: center;
`;
