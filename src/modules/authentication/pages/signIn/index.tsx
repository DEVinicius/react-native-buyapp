import React from 'react';
import {View} from 'react-native';
import {SignInForm} from './components/form';
import {Header} from './components/header';

export function SignIn(): JSX.Element {
  return (
    <View>
      <Header />
      <SignInForm />
    </View>
  );
}
