import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

type Props = {};

const ProfilePicture = function ({}: Props) {
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/icon.png")} style={styles.image} />
        </View>
    );
};

export default ProfilePicture;
