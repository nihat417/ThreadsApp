import React from 'react'
import { StyledView,StyledButton,StyledInput,StyledText, StyledImage, InstagramBigLogo, MetaLogo } from '../../../common/StyledComponents';
import AuthInputs from './components/AuthInputs';
import AuthButton from './components/AuthButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
  return (
    <StyledView className='h-screen bg-[#000]'>
        <StyledText className='mt-[30px] text-[16px] text-[#878787] text-center'>English (US)</StyledText>
        <StyledView className='mt-[200px] items-center'>
            <InstagramBigLogo/>
        </StyledView>
        <StyledView className='mt-[100px]'>
            <AuthInputs placeholder="Username, email or mobile number"/>
            <AuthInputs placeholder="Password"/>
        </StyledView>
        <StyledView>
            <AuthButton title='Log In'/>
        </StyledView>
        <StyledButton onPress={()=>navigation.navigate("Register")}>
            <StyledText className='text-white text-center mt-[10px] text-[14px]'>Register</StyledText>
        </StyledButton>

        <StyledView className='mt-[130px] items-center'>
            <MetaLogo/>
        </StyledView>
    </StyledView>
  )
}

export default Login;