import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {colors} from './src/appStyles/colors';
import {MCQTraining} from './src/screens/MCQTraining';
import myStore from './src/redux/ConfigStore';
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDV0gW5wSwOFCmqE8cXAgAIyREzH8b-Ja0',
  authDomain: 'learninglanguages-bf360.firebaseapp.com',
  projectId: 'learninglanguages-bf360',
  storageBucket: 'learninglanguages-bf360.appspot.com',
  messagingSenderId: '517960283011',
  databaseURL: 'https://learninglanguages-bf360.firebaseio.com',
  appId: '1:517960283011:web:03373d8bcf3aa102f6bcb6',
  measurementId: 'G-Q2LG3HF8ND',
};

const iosFirebaseConfig = {
  ...firebaseConfig,
  apiKey: 'AIzaSyDXdZ3Xl2NWXflwyHlqmB7O0eJutqCnZWk',
};

const config: any = Platform.select({
  android: firebaseConfig,
  ios: iosFirebaseConfig,
});

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}
const App = () => {
  return (
    <Provider store={myStore}>
      <SafeAreaView style={styles.safeAreaStyle}>
        <StatusBar backgroundColor={colors.mainThemeBackground} />
        <MCQTraining />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: colors.mainThemeBackground,
  },
});

export default App;
