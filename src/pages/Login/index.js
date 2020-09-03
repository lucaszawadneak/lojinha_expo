import React, { useState } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import Input from '~/components/Input';
import IconInput from '~/components/IconInput';
import Button from '~/components/Button';
import api from '~/services/api';

import {
  Container,
  ContentHolder,
  InputLabel,
  ImageHolder,
  TextHolder,
  CheckboxHolder,
  Check,
  SubLabel,
  LabelHolder,
  RedBox,
  SubLabelUnderlined,
} from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRemember] = useState(false);
  const [hiddenText, setHiddenText] = useState(true);

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };

    const response = await api.post('/login', data);
    if (response.status === 200) {
      navigation.navigate('Home');
      console.log(response.data);
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#FCF1DF" barStyle="dark-content" />
      <LabelHolder>
        <RedBox />
        <SubLabel>Plataforma de ação de venda</SubLabel>
      </LabelHolder>
      <ContentHolder>
        <ImageHolder source={require('~/assets/img/logo.png')} />
        <InputLabel>Nome da conta ou GRR</InputLabel>
        <Input onChangeText={setEmail} />
        <TextHolder>
          <InputLabel>Senha</InputLabel>
          <TouchableOpacity>
            <SubLabel>Esqueceu sua senha?</SubLabel>
          </TouchableOpacity>
        </TextHolder>
        <IconInput
          secureTextEntry={hiddenText}
          rightIcon={hiddenText ? 'eye-off' : 'eye'}
          onChangeText={setPassword}
          onPress={() => setHiddenText(!hiddenText)}
          onSubmitEditing={handleLogin}
        />
        <CheckboxHolder>
          <Check
            value={rememberPassword}
            onChange={() => setRemember(!rememberPassword)}
          />
          <SubLabelUnderlined>Lembrar minha senha</SubLabelUnderlined>
        </CheckboxHolder>
        <Button onPress={handleLogin} title="entrar" />
        <TouchableOpacity>
          <SubLabelUnderlined>
            Não tem uma conta? Faça o cadastro
          </SubLabelUnderlined>
        </TouchableOpacity>
      </ContentHolder>
    </Container>
  );
};

export default Login;
