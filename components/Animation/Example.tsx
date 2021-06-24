
import React from "react";
import {View, Text, Button,StyleSheet} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    useDerivedValue
} from 'react-native-reanimated';
import {  DrawerActions } from '@react-navigation/native';

// @ts-ignore
export default function Rotation({ navigation }) {
    const animation = useSharedValue(0)
    const rotation = useDerivedValue(()=>{
        return interpolate(animation.value,
            [0,360],
            [0,360])
    })
    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform:[
              {
                  rotate: rotation.value + 'deg'
              }
          ]
        };
    });
    const startAnimation = () => {
        animation.value = withTiming(120,{
            duration: 2000
        },()=>{
            animation.value = 0
        })
    }
    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.box, { transform: [{ translateX: this.transX }] }]}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    box:{
        width: 80,
        height: 80,
        backgroundColor: 'gray'
    },
    header:{
        position: "absolute",
        top: 35,
        fontSize: 25
    }
})
