import React from 'react';
import {
  StyledView,
  StyledButton,
  StyledImage,
  StyledInput,
  Globus,
  Instagram,
  ProfileMenu,
} from '../../../../common/StyledComponents';
import {useNavigation} from '@react-navigation/native';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
const MMKV = new MMKVLoader().initialize();

const ProfileHeader = () => {
  const navigation = useNavigation();
  return (
    <StyledView className="bg-[#0D0D0D] py-[25px] px-[10px] flex flex-row justify-between">
      <StyledButton
        onPress={() => {
          MMKV.clearStore();
        }}>
        <Globus />
      </StyledButton>
      <StyledView className="flex flex-row">
        <StyledButton>
          <Instagram />
        </StyledButton>
        <StyledButton>
          <ProfileMenu onPress={() => navigation.navigate('Settings')} />
        </StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default ProfileHeader;
