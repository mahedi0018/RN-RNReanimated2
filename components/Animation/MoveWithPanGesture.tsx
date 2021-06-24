import React, {useEffect} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    useDerivedValue, withSpring, withRepeat, useAnimatedGestureHandler
} from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';
import {PanGestureHandler} from "react-native-gesture-handler";

// @ts-ignore
export default function MoveWithPan({navigation}) {
    const opacity = useSharedValue(0)
    const touchX = useSharedValue(0)
    const touchY = useSharedValue(0)
    const gestureHandler = () => useAnimatedGestureHandler({
        onActive: (event) => {
            touchX.value = event.translationX,
                touchY.value = event.translationY
        },
        onEnd: event => {
            touchX.value = withSpring(0),
                touchY.value = withSpring(0)
        }
    })
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: touchX.value},
                {translateY: touchY.value}
            ]
        }
    })


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
            <Text style={styles.header}>Move With PanGesture</Text>
            <PanGestureHandler onHandlerStateChange={gestureHandler()}>
                <Animated.View style={[styles.box, animatedStyle]}/>
            </PanGestureHandler>


            <View style={styles.footer}>
                <Button
                    title="Open drawer"
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                />

                <Button
                    title="Toggle drawer"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    box: {
        width: 80,
        height: 80,
        backgroundColor: 'tomato',
        borderRadius: 50
    },
    header: {
        position: "absolute",
        top: 35,
        fontSize: 25
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: '100%'
    }
})
