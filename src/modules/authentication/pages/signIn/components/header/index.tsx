import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Container, HeaderText, Main, SignUp, SignUpButton} from './style';

export function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      <Main>
        <HeaderText fontSize="26px">Sign in</HeaderText>
        <HeaderText fontSize="40px" isBold={true}>
          Account
        </HeaderText>
      </Main>
      <SignUp>
        <HeaderText fontSize="16px">Don't have account</HeaderText>
        <SignUpButton
          children="SignUp"
          fontSize="16px"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </SignUp>
    </Container>
  );
}
