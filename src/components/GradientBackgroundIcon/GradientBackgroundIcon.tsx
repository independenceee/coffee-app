import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../GlobalStyles";
import styles from "./styles";
import CustomIcon from "../CustomIcon";

interface GradientBGIconProps {
    name: string;
    color: string;
    size: number;
}

const GradientBackgroundIcon: React.FC<GradientBGIconProps> = ({ name, color, size }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[Colors.primaryGreyHex, Colors.primaryBlackHex]}
                style={styles.linearGradientBackground}
            >
                <CustomIcon name={name} color={color} size={size} />
            </LinearGradient>
        </View>
    );
};

export default GradientBackgroundIcon;
