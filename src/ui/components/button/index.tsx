import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Touchable, Text} from './style';

interface IButtonUi extends TouchableOpacityProps {
  isDisabled?: boolean;
  color?: string;
  children: string;
  fontColor?: string;
  fontSize?: string;
}

export function ButtonUi({
  isDisabled = false,
  color = 'transparent',
  children,
  fontColor = 'black',
  fontSize = '12px',
  ...props
}: IButtonUi) {
  return (
    <Container>
      <Touchable color={color} isDisabled={isDisabled} {...props}>
        <Text isDisabled={isDisabled} fontSize={fontSize} fontColor={fontColor}>{children}</Text>
      </Touchable>
    </Container>
  );
}
