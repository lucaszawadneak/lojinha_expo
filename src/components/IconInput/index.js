import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { Container, Wrapper, IconHolder } from './styles';

const IconInput = ({ leftIcon, rightIcon, onPress, ...rest }) => {
  const { width } = Dimensions.get('window');

  // leftSide = indica para o styled components se o componente está do lado esquerdo
  // rightSide = indica que está do lado direito
  // objetivo de remover as bordar

  // width no wrapper = width da tela - (largura dos IconHolder + padding da página)

  return (
    <Container>
      {leftIcon !== '' ? (
        <IconHolder leftSide>
          <Icon name={leftIcon} color="#ED524A" size={25} />
        </IconHolder>
      ) : null}
      <Wrapper
        leftIconEnabled={leftIcon !== ''}
        {...rest}
        width={leftIcon !== '' ? width - 160 : width - 100}
      />
      <IconHolder rightSide>
        <TouchableOpacity onPress={onPress}>
          <Icon name={rightIcon} color="#ED524A" size={20} />
        </TouchableOpacity>
      </IconHolder>
    </Container>
  );
};

export default IconInput;

IconInput.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string.isRequired,
  onPress: PropTypes.oneOfType([PropTypes.func]).isRequired,
};

IconInput.defaultProps = {
  leftIcon: '',
};
