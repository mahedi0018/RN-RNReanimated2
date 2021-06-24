import React, {useEffect, useMemo, useState} from 'react';
import {View, Button, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  multiply,
  interpolate,
  withTiming,
  useAnimatedProps,
  Extrapolate,
  Easing,
  useAnimatedStyle,
  runOnJS,
  useDerivedValue,
  withRepeat,
} from 'react-native-reanimated';

import Svg, {
  Circle,
  Defs,
  Stop,
  G,
  LinearGradient,
  Text,
  Path,
  Use,
} from 'react-native-svg';

//***** createAnimatedComponent will convert any component to Animated component

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Prop {
  circleSize: number;
  borderWidth: number;
  mainColor?: string;
  firstLinearColor?: string;
  secondLinearColor?: string;
  innerColor?: string;
  percentage: number;
}

// @ts-ignore

export const Wave: React.FC<Prop> = React.memo(
  ({
    circleSize,
    borderWidth,
    mainColor,
    firstLinearColor,
    secondLinearColor,
    innerColor,
    percentage,
  }) => {
    const progress = useSharedValue(0);
    useEffect(() => {
      progress.value = withRepeat(
        withTiming(1, {duration: 3000, easing: Easing.inOut(Easing.ease)}),
        -1,
        true,
      );
    }, [progress]);

    // const m = mix.bind(null, progress.value);
    const mix2 = (value: number, x: number, y: number) => {
      console.log('value', value);
      return x * (1 - value) + y * value;
    };
    const m2 = mix2.bind(null, progress.value);
    console.log('mmmm', m2(0, 0.5));
    const data = useDerivedValue(() => {
      const mix = (value: number, x: number, y: number) =>
        x * (1 - value) + y * value;
      const m = mix.bind(null, progress.value);
      return {
        from: {
          x: m(-0.1, -1),
          y: m(0.2, 0.5),
        },
        c1: {x: m(0.5, 0.5), y: m(0.7, 1)},
        c2: {x: m(1, 0.5), y: m(0.3, 0)},
        to: {x: m(1.1, 2), y: m(0.8, 0.5)},
        // from: {
        //     x: m(-0.1, -1),
        //     y: m(0.2, 0.5),
        // },
        // c1: {x: m(.5, 0.5), y: m(0.7, 1)},
        // c2: {x: m(1, 0.5), y: m(0.3, 0)},
        // to: {x: m(1.1, 2), y: m(0.8, 0.5)},
      };
    });
    const path = useAnimatedProps(() => {
      const {from, c1, c2, to} = data.value;
      return {
        d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
      };
    });
    // console.log("mmmm", data.value)
    return (
      <Svg
        width={circleSize}
        height={circleSize - 5}
        style={{backgroundColor: '#242424'}}
        viewBox="0 0 .8 .5">
        <G>
          <AnimatedPath
            fill="#86b4ff"
            // stroke="#86b4ff"
            // strokeWidth={.01}
            d="M0 .1 C .1 .2,  .2 .1, .3 .2 C .4 .2, .5 .1, .6 .1 C .65 .3, .7 .099, .8 .1 L 1 .5 L 0 .5 Z"
            // animatedProps={path}
          />
        </G>

        {/*<Svg  viewBox="0 0 100 100">*/}
        {/*    <Path fill="#0099ff" fill-opacity="1"*/}
        {/*          d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"*/}
        {/*    />*/}

        {/*</Svg>*/}

        {/*<Svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor: 'red',}}>*/}
        {/*    <Path stroke="black"*/}
        {/*          // d="M 0,0 C 1 -3,  2 -2, 3 -1 C 4 -3,  5 -2, 6 -1"*/}
        {/*        d="M 20,50 C 40 30,  60 40, 80 50, C 80 60,  90 60, 100 50"*/}
        {/*        // d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"*/}
        {/*    />*/}
        {/*</Svg>*/}
        {/*<View style={{height: 100, width: 250, backgroundColor: 'blue'}} />*/}
      </Svg>
    );
  },
);

const styles = StyleSheet.create({});
