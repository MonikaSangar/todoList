//import liraries
import React from 'react';

import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './src/Navigation/Routes';
import store from './src/redux/store';


// create a component
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Provider store={store}>
      <Routes/>
      </Provider>
    </SafeAreaView>
  );
};

//make this component available to the app
export default App;
