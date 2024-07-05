import React from 'react';
import {
  StyledView,
  StyledButton,
  StyledInput,
  StyledText,
  StyledImage,
  InstagramBigLogo,
  MetaLogo,
} from '../../../common/StyledComponents';
import AuthInputs from './components/AuthInputs';
import AuthButton from './components/AuthButton';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {getNewTokens} from '../../../utils';
import {useStorage} from '../../../hooks/useStorage';
import {useEncryptedStorage} from '../../../hooks/useEncryptedStorage';

const Login = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  const [authorized, setAuthorized] = useStorage('authorized', false);
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');

  const handleLogin = async (url, body) => {
    const data = await getNewTokens(url, body);
    await setAccessToken(data.accessToken);
    await setRefreshToken(data.refreshToken);
    if (data.accessToken && data.refreshToken) {
      setAuthorized(true);
    }
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <StyledView className="mt-[200px] items-center">
        <InstagramBigLogo />
      </StyledView>
      <StyledView className="mt-[100px]">
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
          handleLogin('http://localhost:4000/auth/login', formData);
        }}
        title="Log In"
      />

      <StyledButton onPress={() => navigation.navigate('Register')}>
        <StyledText className="text-white text-center mt-[20px] text-[14px] underline">
          Register
        </StyledText>
      </StyledButton>

      <StyledView className="mt-[130px] items-center">
        <MetaLogo />
      </StyledView>
    </KeyboardAwareScrollView>
  );
};

export default Login;
