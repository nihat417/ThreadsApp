import {useState, useEffect} from 'react';
import ThreadItem from '../pages/common/Home/components/ThreadItem.jsx';
import {useEncryptedStorage} from '../hooks/useEncryptedStorage';
import {refreshTokens} from '../utils.js';
import {Alert, FlatList} from 'react-native';

const Posts = ({mention}) => {
  const [posts, setPosts] = useState([]);
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );

  const getPosts = async () => {
    try {
      const response = await fetch(
        mention
          ? 'http://localhost:4000/posts/search/mentions/me'
          : 'http://localhost:4000/posts/me',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else if (response.status === 403) {
        const tokens = await refreshTokens(
          'http://localhost:4000/auth/refresh',
          {
            refreshToken: refreshToken,
          },
        );
        await setAccessToken(tokens.accessToken);
      } else {
        Alert.alert('An error happened, please try again');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({item}) => (
    <ThreadItem item={item} userId={item.userId} />
  );

  useEffect(() => {
    getPosts();
  }, [accessToken]);

  return (
    <FlatList
      className="w-full h-full"
      key={item => item._id}
      data={posts}
      renderItem={item => renderItem(item)}
    />
  );
};

export default Posts;
