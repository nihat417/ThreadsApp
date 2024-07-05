import {useEffect, useState} from 'react';
import {
  StyledView,
  StyledInput,
  StyledText,
  StyledImage,
} from '../../../../common/StyledComponents';
import ToggleSwitch from 'toggle-switch-react-native';
import {useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Alert} from 'react-native';
import {useEncryptedStorage} from '../../../../hooks/useEncryptedStorage';
import {refreshTokens} from '../../../../utils';
import EditProfileHeader from '../components/EditProfileHeader';

const EditProfile = () => {
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );
  const [formData, setFormData] = useState({});
  const [privateProfile, setPrivateProfile] = useState(false);
  const user = useRoute().params.user;

  const updateUser = async () => {
    try {
      const response = await fetch('http://localhost:4000/users/edit', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      response.ok
        ? Alert.alert('User successfully updated')
        : Alert.alert('An error occurred, try again');

      if (response.status === 403) {
        const tokens = await refreshTokens(
          'http://localhost:4000/auth/refresh',
          {
            refreshToken: refreshToken,
          },
        );
        await setAccessToken(tokens.accessToken);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setFormData(user);
  }, [user]);

  return (
    <>
      <EditProfileHeader updateUser={updateUser} />
      <KeyboardAwareScrollView style={{backgroundColor: '#0D0D0D'}}>
        <StyledView className="my-[40%] border-[2px] rounded-[10px] border-[#424141] mx-[10px]">
          <StyledView className="flex flex-row justify-between mx-[20px] my-[20px] border-b-2 border-[#424141]">
            <StyledView className="flex flex-col mb-[16px]">
              <StyledText className="text-white text-[16px]">Name</StyledText>
              <StyledInput
                onChangeText={text =>
                  setFormData(prevState => ({
                    ...prevState,
                    firstname: text,
                  }))
                }
                value={formData.firstname}
                className="text-white text-base"
              />
            </StyledView>
            <StyledImage
              className="w-[50px] h-[50px] rounded-[30px]"
              source={{
                uri: formData.profilePicture,
              }}
            />
          </StyledView>

          <StyledView className="w-auto mx-4 pb-2 border-b-2 border-[#424141] ">
            <StyledText className="text-white text-[16px]">Surname</StyledText>
            <StyledInput
              onChangeText={text =>
                setFormData(prevState => ({
                  ...prevState,
                  lastname: text,
                }))
              }
              value={user.lastname}
              className="text-white text-base"
            />
          </StyledView>
          <StyledView className="flex flex-col mx-[20px] mt-[10px] mb-[10px] border-b-2 border-[#424141]">
            <StyledView className="mb-[10px]">
              <StyledText className="text-white text-[16px]">Bio</StyledText>

              <StyledInput
                onChangeText={text =>
                  setFormData(prevState => ({
                    ...prevState,
                    bio: text,
                  }))
                }
                value={formData.bio}
                placeholderTextColor="#B7B7B7"
                placeholder="+ Add bio"
                className="text-white text-[16px] mt-2"
              />
            </StyledView>
          </StyledView>

          <StyledView className="flex flex-col mx-[20px] mt-[10px] mb-[20px] border-b-2 border-[#424141]">
            <StyledView className="mb-[10px]">
              <StyledText className="text-white text-[16px]">Link</StyledText>

              <StyledInput
                onChangeText={text =>
                  setFormData(prevState => ({
                    ...prevState,
                    link: text,
                  }))
                }
                value={formData.link}
                placeholderTextColor="#B7B7B7"
                placeholder="+ Add link"
                className="text-blue-400 text-[16px] mt-2"
              />
            </StyledView>
          </StyledView>
          <StyledView className="mx-[20px] mt-[10px] mb-[20px] border-b-2 border-[#424141]">
            <StyledView className="flex-row justify-between items-center pb-4">
              <StyledText className="text-white text-[16px]">
                Private profile
              </StyledText>
              <ToggleSwitch
                isOn={privateProfile}
                onColor="lightgray"
                offColor="darkgray"
                size="large"
                onToggle={isOn => {
                  setPrivateProfile(isOn);
                  setFormData(prevState => ({
                    ...prevState,
                    private: isOn,
                  }));
                }}
              />
            </StyledView>
          </StyledView>
        </StyledView>
      </KeyboardAwareScrollView>
    </>
  );
};

export default EditProfile;
