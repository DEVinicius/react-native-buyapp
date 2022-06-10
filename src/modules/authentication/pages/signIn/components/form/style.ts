import {colors} from './../../../../../../ui/colors/index';
import styled from 'styled-components/native';
import {ButtonUi} from '../../../../../../ui/components/button';

export const Container = styled.View`
  margin: 30px 20px;
`;

interface IHeaderText {
  fontSize: string;
  isBold?: boolean;
  color?: string;
}
export const FormText = styled.Text<IHeaderText>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => (props.isBold ? 'bold' : '400')};
  color: ${props => (props.color ? props.color : colors.black)};
`;

export const FormInput = styled.TextInput`
  height: 28px;
  font-size: 24px;
`;

export const SubmitButton = styled(ButtonUi)`
  margin: 180px 0;
  border-radius: 20px;
  height: 50px;
`;
