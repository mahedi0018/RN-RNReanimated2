import React, {useEffect, useMemo} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  defineAnimation,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';
import {PanGestureHandler} from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';

//***** createAnimatedComponent will convert any component to Animated component
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const BUTTON_WIDTH = Dimensions.get('window').width - 50;
const BUTTON_HEIGHT = 50;
const BUTTON_PADDING = 10;

const SWIPE_BALL_DIMENSION = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const H_WAVE_RANGE = SWIPE_BALL_DIMENSION + 2 * BUTTON_PADDING;
const HORI_SWIPE_RANGE =
  BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPE_BALL_DIMENSION;

// @ts-ignore
export default function SwipeButton({navigation}) {
  const x = useSharedValue(0);
  const isSliding = useSharedValue(false);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      // by ctx you can store the value of last position
      ctx.offsetX = x.value;
    },
    onActive: (event, ctx) => {
      // clamp will count the range of swipe
      const clamp = (value, lowerBound, upperBound) => {
        return Math.min(Math.max(lowerBound, value), upperBound);
      };
      x.value = clamp(event.translationX + ctx.offsetX, 0, HORI_SWIPE_RANGE);
    },
    onEnd: () => {
      x.value =
        x.value < BUTTON_WIDTH / 2 - SWIPE_BALL_DIMENSION / 2
          ? withSpring(0)
          : withSpring(HORI_SWIPE_RANGE);
    },
  });
  const AnimatedStyle = {
    swipeAble: useAnimatedStyle(() => {
      return {
        transform: [{translateX: x.value}],
      };
    }),
    colorWaveRange: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + x.value,
      };
    }),
  };
  console.log('ddd', x.value);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/*<Text style={styles.header}>Scale Animation</Text>*/}

      <View style={[styles.button]}>
        <AnimatedLinearGradient
          colors={['#00CDAC', '#09577B']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1.0, y: 0.1}}
          style={[styles.colorWave, AnimatedStyle.colorWaveRange]}
        />
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.swipeBall, AnimatedStyle.swipeAble]} />
        </PanGestureHandler>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeBall: {
    width: SWIPE_BALL_DIMENSION,
    height: SWIPE_BALL_DIMENSION,
    borderRadius: SWIPE_BALL_DIMENSION,
    position: 'absolute',
    left: BUTTON_PADDING,
    backgroundColor: '#FC6767',
  },
  colorWave: {
    position: 'absolute',
    left: 0,
    width: H_WAVE_RANGE,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
    // backgroundColor: 'red'
  },
});
