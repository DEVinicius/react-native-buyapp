import React from 'react';
import {View} from 'react-native';
import {colors} from '../../../../../../ui/colors';
import {ButtonUi} from '../../../../../../ui/components/button';
import {Container, FormInput, FormText, SubmitButton} from './style';

export function SignInForm() {
  return (
    <Container>
      <View>
        <FormText fontSize="16px" color={colors.grey}>
          Email address
        </FormText>
        <FormInput />
        <SubmitButton
          fontColor={colors.white}
          color={colors.orange}
          onPress={async function () {}}
          children="Press Me"
          fontSize='14px'
        />
      </View>
    </Container>
  );
}
