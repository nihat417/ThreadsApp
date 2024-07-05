import {useContext, useRef, useState, useEffect} from 'react';
import {TabBarVisibilityContext} from '../../../../contexts/TabBarVisibilityContext';
import {
  StyledView,
  StyledScrollView,
  StyledText,
  StyledInput,
  InputSearch,
} from '../../../../common/StyledComponents';
import {useEncryptedStorage} from '../../../../hooks/useEncryptedStorage';
import {refreshTokens} from '../../../../utils';
import {Keyboard, SectionList, ActivityIndicator} from 'react-native';
import UserSearchItem from '../components/UserSearchItem';
import ThreadItem from '../../Home/components/ThreadItem';
import ThreadCommentItem from '../../Home/components/ThreadCommentItem';

const Search = () => {
  const [accessToken, setAccessToken] = useEncryptedStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useEncryptedStorage(
    'refreshToken',
    '',
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);
  const [replies, setReplies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const {setTabBarVisible} = useContext(TabBarVisibilityContext);
  const inputRef = useRef(null);

  const getSearchResults = async () => {
    try {
      let [usersResponse, postsResponse, repliesResponse] = await Promise.all([
        fetch(`http://localhost:4000/users/search/${searchTerm}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        fetch(`http://localhost:4000/posts/search/${searchTerm}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        fetch(`http://localhost:4000/replies/search/${searchTerm}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      ]);

      if (usersResponse.ok) {
        let users = await usersResponse.json();
        setUsers({title: 'Users', data: users});
      }

      if (postsResponse.ok) {
        let posts = await postsResponse.json();
        setPosts({title: 'Posts', data: posts});
      }

      if (repliesResponse.ok) {
        let replies = await repliesResponse.json();
        setReplies({title: 'Replies', data: replies});
      }

      if (
        repliesResponse.status === 403 ||
        usersResponse.status === 403 ||
        postsResponse.status === 403
      ) {
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
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = () => {
    setTabBarVisible(false);
  };

  const handleBlur = () => {
    setTabBarVisible(true);
  };

  const RenderItem = ({item}) =>
    item.title === 'Users' ? (
      <UserSearchItem item={item.data[0]} />
    ) : item.title === 'Posts' ? (
      <ThreadItem item={item.data[0]} userId={item.data[0].userId} />
    ) : (
      <ThreadCommentItem item={item.data[0]} userId={item.data[0].userId} />
    );

  useEffect(() => {
    searchTerm.length > 2 ? getSearchResults() : setSearchResults([]);
  }, [searchTerm]);

  useEffect(() => {
    const allSearchItems = [users, posts, replies];
    let filteredArray = [];
    filteredArray = allSearchItems.filter(
      item => item !== null && item.data.length,
    );
    setSearchResults(filteredArray);
  }, [users, posts, replies]);

  return (
    <StyledView className="bg-[#0D0D0D] flex-1">
      <StyledText className="text-white text-[32px] mt-[40px] ml-[20px]">
        Search
      </StyledText>
      <StyledView className="flex-row items-center bg-[#1A1A1A] rounded-[20px] mx-[20px] mt-[10px] mb-[20px]">
        <InputSearch className="ml-[10px]" />
        <StyledInput
          ref={inputRef}
          onChangeText={setSearchTerm}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Search"
          placeholderTextColor="#FFF"
          className="text-white bg-[#1A1A1A] py-3 pl-2"
        />
      </StyledView>

      <StyledView className="bg-[#0D0D0D] flex-1 items-center justify-center">
        {loading && searchTerm.length > 2 ? (
          <ActivityIndicator />
        ) : (
          <SectionList
            renderSectionHeader={({section: {title}}) => (
              <StyledText className="pt-2 text-white text-lg font-medium">
                {title}
              </StyledText>
            )}
            sections={searchResults}
            stickySectionHeadersEnabled={false}
            renderItem={({section}) => <RenderItem item={section} />}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 10,
              paddingHorizontal: 20,
            }}
          />
        )}
      </StyledView>
    </StyledView>
  );
};

export default Search;
