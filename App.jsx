import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useStorage} from './src/hooks/useStorage';
import MainNavTab from './src/pages/navigations/MainNavTab';
import AuthNav from './src/pages/common/Auth/AuthNav';

const App = () => {
  const [authorized, setAuthorized] = useStorage('authorized', false);
  const [accessToken, setAccessToken] = useStorage('accessToken', '');
  const [refreshToken, setRefreshToken] = useStorage('refreshToken', '');

  return (
    <SafeAreaProvider style={{backgroundColor: '#0D0D0D'}}>
      <SafeAreaView style={{flex: 1}} edges={['right', 'top', 'left']}>
        {authorized ? <MainNavTab /> : <AuthNav />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
