import {useState, useEffect} from 'react';
import {
  StyledView,
  StyledButton,
  StyledImage,
  StyledText,
} from '../../../../common/StyledComponents';
import {useNavigation} from '@react-navigation/native';
import Posts from '../../../../common/Posts';
import Replies from '../../../../common/Replies';
import {useEncryptedStorage} from '../../../../hooks/useEncryptedStorage';
import {refreshTokens} from '../../../../utils';

const Profile = () => {
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );
  const [activeTab, setActiveTab] = useState('threads');
  const navigation = useNavigation();
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    try {
      const response = await fetch(`http://localhost:4000/users/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else if (response.status === 403) {
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
    getUserInfo();
  }, []);

  return (
    <StyledView className="flex-1 bg-[#0D0D0D]">
      <StyledView className="w-full p-[10px]">
        <StyledView className="flex flex-row justify-between mr-[10px]">
          <StyledView className="flex flex-col">
            <StyledText className="text-white text-[24px] mb-[10px]">
              {user.firstname} {user.lastname}
            </StyledText>
            <StyledView className="flex flex-row">
              <StyledText className="text-white text-[16px] mr-[10px]">
                {user.nickname}
              </StyledText>
            </StyledView>
            <StyledView className="w-[250px] mt-[10px]">
              {user.bio && (
                <StyledText className="text-white text-[16px]">
                  {user.bio}
                </StyledText>
              )}
              {user.link && (
                <StyledButton
                  onPress={() => {
                    navigation.navigate('WebView', {url: user.link});
                  }}>
                  <StyledText className="text-blue-400 text-[16px] mt-1">
                    {user.link}
                  </StyledText>
                </StyledButton>
              )}
            </StyledView>
            <StyledView className="flex flex-row mt-[5px]">
              <StyledText className=" text-[#B8B8B8] text-[16px]">
                {user.followers?.length} followers
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledImage
            className="h-[74px] w-[74px] rounded-full"
            source={{
              uri: user.profilePicture,
            }}
          />
        </StyledView>

        <StyledView className="w-full flex-row justify-between mt-[20px]">
          <StyledButton
            onPress={() => navigation.navigate('EditProfile', {user: user})}
            className="w-[48%] border-[2px] py-[10px] rounded-[10px] border-[#2F2F2F]">
            <StyledText className="text-[16px] text-white text-center">
              Edit profile
            </StyledText>
          </StyledButton>
          <StyledButton className="w-[48%] border-[2px] py-[10px] rounded-[10px] border-[#2F2F2F]">
            <StyledText className="text-[16px] text-white text-center">
              Share profile
            </StyledText>
          </StyledButton>
        </StyledView>
        {/*  */}

        <StyledView className="flex flex-row justify-center mt-[30px]">
          <StyledButton
            onPress={() => {
              setActiveTab('threads');
            }}
            className={`px-[80px] border-b-2 ${
              activeTab === 'threads' ? 'border-white' : 'border-zinc-800'
            }`}>
            <StyledText className="text-[16px] text-white mb-[10px]">
              Threads
            </StyledText>
          </StyledButton>
          <StyledButton
            onPress={() => {
              setActiveTab('replies');
            }}
            className={`px-[80px] border-b-2 ${
              activeTab === 'replies' ? 'border-white' : 'border-zinc-800'
            }`}>
            <StyledText className="text-[16px] text-white mb-[10px]">
              Replies
            </StyledText>
          </StyledButton>
        </StyledView>

        {activeTab === 'threads' ? (
          <Posts />
        ) : (
          <Replies user={user} />
        )}
      </StyledView>
    </StyledView>
  );
};

export default Profile;
