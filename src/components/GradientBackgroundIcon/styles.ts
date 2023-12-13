import { StyleSheet } from "react-native";
import { Colors, Spacings } from "../GlobalStyles";

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.secondaryDarkGreyHex,
        borderRadius: Spacings.space_12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.secondaryDarkGreyHex,
        overflow: "hidden",
    },
    linearGradientBackground: {
        height: Spacings.space_36,
        width: Spacings.space_36,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
