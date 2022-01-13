import {StyleSheet} from 'react-native';
import {colors} from '../../appStyles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexWrap: 'wrap',
    height: 40,
  },
  basicTextStyle: {
    fontSize: 25,
    color: colors.mainTextColor,
  },
  boldTextStyle: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
