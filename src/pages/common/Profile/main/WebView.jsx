import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

const WebViewComponent = () => {
  const url = useRoute().params.url;
  return <WebView style={{flex: 1}} source={{uri: url}} />;
};

export default WebViewComponent;
