import {StyleSheet} from 'react-native';
import {colors} from '../../appStyles/colors';

export const styles = StyleSheet.create({
  boldTextStyle: color => {
    return {
      fontWeight: 'bold',
      fontSize: 18,
      color: color || colors.mainTextColor,
    };
  },
  container: color => {
    return {
      marginTop: 75,
      width: '100%',
      paddingTop: 20,
      paddingBottom: 50,
      paddingHorizontal: 20,
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      backgroundColor: color || 'transparent',
      minHeight: 125,
    };
  },
  buttonContainer: buttonBackgroundColor => {
    return {
      backgroundColor: buttonBackgroundColor,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
    };
  },
  basicTextStyle: {
    fontWeight: 'bold',
    color: colors.mainTextColor,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
