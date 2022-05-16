import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { colors } from "./src/appStyles/colors";
import { MCQTraining } from "./src/screens/MCQTraining";
import myStore from "./src/redux/ConfigStore";


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
