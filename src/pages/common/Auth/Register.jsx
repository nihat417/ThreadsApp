import React from 'react';
import {
  StyledView,
  StyledText,
  InstagramBigLogo,
  StyledButton,
  MetaLogo,
} from '../../../common/StyledComponents';
import {useNavigation} from '@react-navigation/native';
import AuthButton from './components/AuthButton';
import AuthInputs from './components/AuthInputs';
import {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {sendData} from '../../../utils';

const Register = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <StyledView className="mt-[100px] items-center">
        <InstagramBigLogo />
      </StyledView>

      <StyledView className="mt-[50px]">
        <AuthInputs
          setData={setFormData}
          inputName="firstname"
          placeholder="First name"
        />
        <AuthInputs
          setData={setFormData}
          inputName="lastname"
          placeholder="Last name"
        />
        <AuthInputs
          setData={setFormData}
          inputName="nickname"
          placeholder="Nickname"
        />
        <AuthInputs
          setData={setFormData}
          inputName="email"
          placeholder="Email"
        />
        <AuthInputs
          setData={setFormData}
          inputName="password"
          placeholder="Password"
        />
      </StyledView>

      <AuthButton
        action={() => {
          sendData('http://localhost:4000/auth/register', formData, null);
        }}
        title="Register"
      />

      <StyledButton onPress={() => navigation.navigate('Login')}>
        <StyledText className="text-white text-center mt-[20px] text-[14px] underline">
          Back to Login
        </StyledText>
      </StyledButton>

      <StyledView className="w-full mt-[50px] items-center">
        <MetaLogo />
      </StyledView>
    </KeyboardAwareScrollView>
  );
};

export default Register;
