import React from "react";
import { ScrollView, Text, View, StatusBar } from "react-native";
import styles from "./styles";
import { Colors } from "../../components/GlobalStyles";
import Header from "../../layouts/Header";
type Props = {};

const Home = function ({}: Props) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.primaryBlackHex} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewWrapper}>
                <Header title={"Home"} />
            </ScrollView>
        </View>
    );
};

export default Home;
