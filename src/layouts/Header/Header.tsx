import React, { FC } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import ProfilePicture from "../../components/ProfilePicture";
import GradientBackgroundIcon from "../../components/GradientBackgroundIcon/GradientBackgroundIcon";
import { Colors, FontSizes } from "../../components/GlobalStyles";

type Props = {
    title?: string;
};

const Header: FC<Props> = function ({ title }: Props) {
    return (
        <View style={styles.container}>
            <GradientBackgroundIcon name="menu" size={FontSizes.size_16} color={Colors.primaryLightGreyHex} />
            <Text style={styles.content}>{title}</Text>
            <ProfilePicture />
        </View>
    );
};

export default Header;
