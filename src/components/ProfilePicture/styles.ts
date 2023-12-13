import { StyleSheet } from "react-native";
import { Colors, Spacings } from "../GlobalStyles";

const styles = StyleSheet.create({
    container: {
        height: Spacings.space_36,
        width: Spacings.space_36,
        borderRadius: Spacings.space_12,
        borderWidth: 2,
        borderColor: Colors.secondaryDarkGreyHex,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    image: {
        height: Spacings.space_36,
        width: Spacings.space_36,
    },
});

export default styles;
