import { StyleSheet } from "react-native";
import { colors } from "../../../appStyles/colors";

export const styles = StyleSheet.create({
  basicTextStyle: {
    fontSize: 18,
    color: colors.mainTextColor,
  },
  subContainer: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    backgroundColor: colors.white,
    // minWidth: 70,
    // maxWidth: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  container: (index) => {
    return {
      minWidth: "45%",
      justifyContent: "center",
      margin: 5,
      alignItems: index % 2 === 0 ? "flex-end" : "flex-start",
    };
  },
});
