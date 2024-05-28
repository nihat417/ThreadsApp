import React,{useState} from 'react'
import { StyledView,StyledButton,StyledScrollView,StyledImage,StyledInput, StyledText, ThreadsIc } from '../../../../common/StyledComponents';
import { useNavigation } from '@react-navigation/native';
import ProfileHeader from '../components/ProfileHeader';
import ThreadItem from '../../Home/components/ThreadItem';

const Profile = () => {
    const navigation = useNavigation();
  return (
    <StyledView className='h-full bg-[#0D0D0D]'>

      

        <StyledView className='ml-[10px]'>
            {/*  */}
            <StyledView className='flex flex-row justify-between mr-[10px]'>
                <StyledView className='flex flex-col'>
                    <StyledText className='text-white text-[24px] mb-[10px]'>Ana de Armas </StyledText>
                    <StyledView className='flex flex-row'>
                        <StyledText className='text-white text-[16px] mr-[10px]'>Anadearmas21</StyledText>
                        <ThreadsIc/>
                    </StyledView>
                    <StyledView className='w-[250px] mt-[10px]'>
                        <StyledText className='text-white text-[16px]'>Curious to learn something unique or challenging</StyledText>
                    </StyledView>
                    <StyledView className='flex flex-row mt-[5px]'>
                        <StyledImage className='h-[18px] w-[18px] rounded-[30px] absolute left-[10px]' source={require('../../../../assets/Images/anadearmas.jpg')}/>
                        <StyledImage className='h-[18px] w-[18px] rounded-[30px]' source={require('../../../../assets/Images/anadearmas.jpg')}/>
                        <StyledText className='ml-[10px] text-[#B8B8B8] text-[16px]'>26 followers</StyledText>
                    </StyledView>
                </StyledView>
                <StyledImage className='h-[74px] w-[74px] rounded-[30px]' source={require('../../../../assets/Images/anadearmas.jpg')}/>
            </StyledView>
            {/*  */}

            {/*  */}
            <StyledView className='flex flex-row justify-center mt-[20px]'>
                <StyledButton  onPress={() => navigation.navigate('EditProfile')} className='mx-[10px] border-[2px] py-[10px] px-[50px] rounded-[10px] border-[#2F2F2F]'><StyledText className='text-[16px] text-white'>Edit profile</StyledText></StyledButton>
                <StyledButton className='mx-[10px] border-[2px] py-[10px] px-[50px] rounded-[10px] border-[#2F2F2F]'><StyledText className='text-[16px] text-white'>Share profile</StyledText></StyledButton>
            </StyledView>
            {/*  */}

            <StyledView className='flex flex-row justify-center mt-[30px]'>
                <StyledButton className=' px-[80px] border-b-2 border-[#fff]'><StyledText className='text-[16px] text-white mb-[10px]'>Threads</StyledText></StyledButton>
                <StyledButton className=' px-[80px] border-b-2 '><StyledText className='text-[16px] text-white mb-[10px]'>Replies</StyledText></StyledButton>
            </StyledView>

            <StyledScrollView>
                <ThreadItem/>
                <ThreadItem/>
            </StyledScrollView>

        </StyledView>




    </StyledView>
  )
}

export default Profile;