import {useContext, useRef, useState, useEffect} from 'react';
import {
  StyledView,
  StyledText,
  StyledButton,
  StyledImage,
  StyledInput,
  FileShare,
} from '../../../../common/StyledComponents';
import {TabBarVisibilityContext} from '../../../../contexts/TabBarVisibilityContext';
import {useEncryptedStorage} from '../../../../hooks/useEncryptedStorage';
import {refreshTokens} from '../../../../utils';
import {Alert} from 'react-native';

const NewThread = () => {
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );
  const [thread, setThread] = useState('');
  const {setTabBarVisible} = useContext(TabBarVisibilityContext);
  const inputRef = useRef(null);
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

  const handleFocus = () => {
    setTabBarVisible(false);
  };

  const handleBlur = () => {
    setTabBarVisible(true);
  };

  const createPost = async () => {
    try {
      const response = await fetch('http://localhost:4000/posts/create', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({textContent: thread}),
      });

      response.ok
        ? Alert.alert('Thread successfully created')
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
    getUserInfo();
  }, []);

  return (
    <StyledView className="flex-1 bg-[#0D0D0D]">
      <StyledView className="mt-[30px] ml-[20px]">
        <StyledImage
          className="w-[50px] h-[50px] rounded-[30px]"
          source={{
            uri: user.profilePicture,
          }}
        />
      </StyledView>

      <StyledView>
        <StyledView className="mt-[30px] ml-[20px]">
          <StyledText className="text-white text-lg">
            {user.firstname} {user.lastname}
          </StyledText>
          <StyledInput
            multiline
            onChangeText={text => setThread(text)}
            className="mt-2 placeholder:text-base text-white"
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholderTextColor="#B8B8B8"
            placeholder="Start a thread ..."
          />
        </StyledView>
      </StyledView>

      <StyledView className="w-full px-5 flex-row items-center justify-between mt-5">
        <StyledButton>
          <FileShare />
        </StyledButton>

        <StyledButton
          disabled={!thread.length}
          onPress={createPost}
          className={`${
            thread.length ? 'bg-white' : 'bg-zinc-500'
          } w-[60px] py-2 rounded-full`}>
          <StyledText className="text-black text-center">Post</StyledText>
        </StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default NewThread;
