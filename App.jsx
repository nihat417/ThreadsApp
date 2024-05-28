import React,{useState} from 'react';
import MainNavTab from './src/pages/navigations/MainNavTab';
import AuthNav from './src/pages/common/Auth/AuthNav';

const App = () => {
  const isAut = useState(true);
  return isAut ? <MainNavTab/> : <AuthNav/>;
};

export default App;
