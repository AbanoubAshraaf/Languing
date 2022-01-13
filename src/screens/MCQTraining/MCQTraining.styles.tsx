import {StyleSheet} from 'react-native';
import {colors} from '../../appStyles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.mainThemeBackground,
  },
  subContainer: {
    backgroundColor: colors.mainThemeForeground,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  instruction: {
    color: '#d5edf1',
    fontSize: 10,
    marginBottom: 20,
  },
  listContainer: {
    marginTop: 40,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  hiddenDashes: {
    opacity: 0,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldTextStyle: {
    fontWeight: 'bold',
    color: colors.mainTextColor,
  },
  noEnough: {
    fontSize: 15,
    marginBottom: 100,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
