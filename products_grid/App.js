import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import MainPage from './src/pages/MainPage';
import store from './src/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
