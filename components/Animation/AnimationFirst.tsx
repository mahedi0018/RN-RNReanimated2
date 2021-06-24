
import React from "react";
import {View, Text, Button,StyleSheet} from "react-native";
import {  DrawerActions } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle ,withSpring} from 'react-native-reanimated';

// @ts-ignore
export default function AnimationFirst({ navigation }) {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * 255 }],
        };
    });
    return (
        <View style={{ flex: 1,  }}>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Text>Animation One</Text>

            <Button onPress={() => (offset.value = withSpring(Math.random()))} title="Move" />
            <Button
                title="Open drawer"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />

            <Button
                title="Toggle drawer"
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    box:{
        width: 80,
        height: 80,
        backgroundColor: 'gray'
    }
})
