import React, {useEffect, useMemo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  useDerivedValue,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  withDelay,
} from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';
import {PanGestureHandler} from 'react-native-gesture-handler';

// @ts-ignore
export default function Scale({navigation}) {
  const sizeOfCircle = 80;
  const animation = useSharedValue(1);
  const startAnimation = () => {
    console.log('ddd', animation.value);
    animation.value = withRepeat(
      withTiming(1.5, {
        duration: 2000,
      }),
      -1,
    );
  };
  useEffect(() => {
    // startAnimation()
  }, []);

  const containerStyle = useMemo(
    () => [
      styles.box,
      {
        width: sizeOfCircle,
        height: sizeOfCircle,
      },
    ],
    [],
  );

  const animatedStyle = useAnimatedStyle(() => {
    animation.value = 1.5;
    return {
      transform: [
        {
          scale: withRepeat(
            withTiming(animation.value, {duration: 2000}),
            -1,
            true,
          ),
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <Text style={styles.header}>Scale Animation</Text>

      <Animated.View style={[styles.box, animatedStyle]}>
        <View style={styles.box1} />
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    backgroundColor: 'blue',
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  header: {
    position: 'absolute',
    top: 35,
    fontSize: 25,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
