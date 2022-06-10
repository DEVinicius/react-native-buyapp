import {colors} from './../../../../../../ui/colors/index';
import styled from 'styled-components/native';
import {ButtonUi} from '../../../../../../ui/components/button';

export const Container = styled.View`
  margin: 80px 20px 30px 20px;
`;

export const Main = styled.View``;

interface IHeaderText {
  fontSize: string;
  isBold?: boolean;
  color?: string;
}
export const HeaderText = styled.Text<IHeaderText>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => (props.isBold ? 'bold' : '400')};
  color: ${props => (props.color ? props.color : colors.black)};
`;

export const SignUp = styled.View`
  flex-direction: row;
  padding: 1px;
  margin: 20px 0 0 0;
`;

export const SignUpButton = styled(ButtonUi)`
  padding: 0;
  color: ${colors.black};
  margin: -9px 10px;
`;
