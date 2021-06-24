import React, {useEffect} from 'react';
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
export default function ProgressBar({navigation}) {
  const widthValue = useSharedValue(0);
  useEffect(() => {
    widthValue.value = 73;
  }, [widthValue]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      // progress withDelay and spring
      // width: withDelay(500,
      //     withSpring(`${widthValue.value}%`, {
      //         damping: 50
      //     })
      // )

      //    Progress withTiming
      width: withTiming(`${widthValue.value}%`, {
        duration: 5000,
      }),
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
      <Text style={styles.header}>ProgressBar</Text>
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'blue',
  },
  box: {
    width: 288,
    height: 4,
    backgroundColor: 'red',
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
