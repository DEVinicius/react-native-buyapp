import {TextProps, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

interface ITouchableType extends TouchableOpacityProps {
  color: string;
  isDisabled: boolean;
}

interface ITextType extends TextProps {
  isDisabled: boolean;
  fontColor: string;
  fontSize: string;
}

export const Container = styled.View`
  height: 50px;
  background: transparent;
  position: relative;
  opacity: 1;
`;

export const Touchable = styled.TouchableOpacity<ITouchableType>`
  height: 40px;
  background: ${props => props.color};
  opacity: ${props => (props.isDisabled ? '0.2' : '1')};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 6px;
`;

export const Text = styled.Text<ITextType>`
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  font-weight: bold;
`;
