import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import { GithubFinder } from '@app/modules';

import './global.css';

function App(): React.JSX.Element {
  return (
    <View>
      <StatusBar />
      <SafeAreaView />
      <GithubFinder />
    </View>
  );
}

export default App;
