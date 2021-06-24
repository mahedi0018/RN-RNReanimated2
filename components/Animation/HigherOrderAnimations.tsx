import React, {useEffect, useMemo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  defineAnimation,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';
import {PanGestureHandler} from 'react-native-gesture-handler';

const SLIDER_WIDTH = 300;
const KNOB_WIDTH = 70;
const MAX_RANGE = 20;

// @ts-ignore
export default function HigherOrderAnimations({navigation}) {
  const sizeOfCircle = 80;
  const animation = useSharedValue(1);

  // const withCustomAnimation = () => {
  //     "worklet";
  //    return defineAnimation
  //
  // }
  const translateX = useSharedValue(0);
  const isSliding = useSharedValue(false);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
    },
    onActive: (event, ctx) => {
      const clamp = (value, lowerBound, upperBound) => {
        return Math.min(Math.max(lowerBound, value), upperBound);
      };
      isSliding.value = true;
      translateX.value = clamp(
        event.translationX + ctx.offsetX,
        0,
        SLIDER_WIDTH - KNOB_WIDTH,
      );
    },
    onEnd: () => {
      isSliding.value = false;
    },
  });
  const scrollTranslationStyle = useAnimatedStyle(() => {
    return {transform: [{translateX: translateX.value}]};
  });

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: translateX.value + KNOB_WIDTH,
    };
  });

  return (
    <View style={{width: SLIDER_WIDTH, position: 'absolute', top: 50}}>
      {/*<Text style={styles.header}>Scale Animation</Text>*/}
      <Animated.View style={[styles.progress, progressStyle]}>
        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <Animated.View style={[styles.knob, scrollTranslationStyle]} />
        </PanGestureHandler>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 35,
    fontSize: 25,
  },

  knob: {
    height: KNOB_WIDTH,
    width: KNOB_WIDTH,
    borderRadius: KNOB_WIDTH / 2,
    backgroundColor: '#757de8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'green',
  },
  progress: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#3f51b5',
    borderRadius: KNOB_WIDTH / 2,
    height: KNOB_WIDTH,
    width: '80%',
    justifyContent: 'flex-start',
  },
});
