
import React from "react";
import {View, Text, Button,StyleSheet} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    useDerivedValue, withRepeat
} from 'react-native-reanimated';
import {  DrawerActions } from '@react-navigation/native';

// @ts-ignore
export default function Rotation({ navigation }) {
    const animation = useSharedValue(0)
    const rotation = useDerivedValue(()=>{
        return interpolate(animation.value,
            [0,1],
            [0,180])
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
        animation.value =withRepeat(
            withTiming(1,{
            duration: 2000
        },
        //     ()=>{
        //     animation.value = 0
        // }

        ),
         -1,
            )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={styles.header}>Rotation</Text>
            <Animated.View style={[styles.box, animatedStyles]} />


            <Button onPress={startAnimation} title="Click" />
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
    },
    header:{
        position: "absolute",
        top: 35,
        fontSize: 25
    }
})
