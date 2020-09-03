import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

export const Container = styled.View`
  flex: 1;
  background-color: #fcf1df;
  padding: 20px;
`;

export const ContentHolder = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ImageHolder = styled.Image`
  align-self: center;
  margin: 50px 0px;
`;

export const TextHolder = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxHolder = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Check = styled(CheckBox).attrs({
  tintColors: 'red',
  onCheckColor: 'red',
})``;

export const InputLabel = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 18px;
  opacity: 0.6;
  margin-left: 2px;
`;

export const SubLabel = styled.Text`
  color: #000;
  opacity: 0.6;
  font-size: 14px;
`;

export const SubLabelUnderlined = styled(SubLabel)`
  text-decoration: underline;
`;

export const LabelHolder = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  margin: 20px;
`;

export const RedBox = styled.View`
  height: 25px;
  width: 5px;
  background-color: #ed524a;
  margin-right: 5px;
`;
