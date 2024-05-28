import React from 'react'
import { StyledView,StyledText,InstagramBigLogo,StyledButton,MetaLogo } from '../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import AuthButton from './components/AuthButton';
import AuthInputs from './components/AuthInputs';


const Register = () => {
    const navigation = useNavigation();
  return (
    <StyledView className='h-screen bg-[#000]'>
        <StyledText className='mt-[30px] text-[16px] text-[#878787] text-center'>English (US)</StyledText>
        <StyledView className='mt-[150px] items-center'>
            <InstagramBigLogo/>
        </StyledView>
        <StyledView className='mt-[50px]'>
            <AuthInputs placeholder="Username"/>
            <AuthInputs placeholder="Email"/>
            <AuthInputs placeholder="Confirm Password"/>
            <AuthInputs placeholder="Password"/>
        </StyledView>
        <StyledView>
            <AuthButton title='Log In'/>
        </StyledView>
        <StyledButton onPress={()=>navigation.navigate("Login")}>
            <StyledText className='text-white text-center mt-[10px] text-[14px]'>Login</StyledText>
        </StyledButton>

        <StyledView className='mt-[50px] items-center'>
            <MetaLogo/>
        </StyledView>
    </StyledView>
  )
}

export default Register;