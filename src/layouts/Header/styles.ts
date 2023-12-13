import { StyleSheet } from "react-native";
import { FontFamilys, FontSizes, Spacings, Colors } from "../../components/GlobalStyles";

const styles = StyleSheet.create({
    container: {
        padding: Spacings.space_30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    content: {
        // fontFamily: FontFamilys.poppins_semibold,
        fontSize: FontSizes.size_20,
        color: Colors.primaryWhiteHex,
    },
});

export default styles;
