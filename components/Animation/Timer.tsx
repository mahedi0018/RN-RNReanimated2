import React, {ComponentType, useEffect, useMemo, useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  Pressable,
} from 'react-native';
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
} from 'react-native-reanimated';

import Svg, {
  Circle,
  Defs,
  Stop,
  G,
  LinearGradient,
  Path,
  Use,
} from 'react-native-svg';
import {MAIN_FONT_500} from '../styles/fonts';
import {ScaledSheet} from 'react-native-size-matters';
import getBlack from '../utils/getBlack';
import {BLUE, GREEN} from '../styles/colors';
import CustomButton from './CustomButton';
import {WrapperButton} from './WrapperButton';

//***** createAnimatedComponent will convert any component to Animated component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface Prop {
  circleSize: number;
  borderWidth: number;
  mainColor?: string;
  firstLinearColor?: string;
  secondLinearColor?: string;
  innerColor?: string;
  perFontSize: number;
  duration?: number;
  timer?: number;
  seconds: number;
}

// @ts-ignore

export const Timer: React.FC<Prop> = React.memo(
  ({
    circleSize,
    borderWidth,
    mainColor,
    firstLinearColor,
    secondLinearColor,
    innerColor,
    perFontSize = 8,
    duration = 1000,
    timer,
    seconds,
  }) => {
    const strokeWidth = borderWidth;
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;

    const [value, setValue] = useState(0);
    const progress = useSharedValue(value);

    useEffect(() => setValue(0), [timer]);
    useEffect(() => {
      progress.value = withTiming(timer - value, {
        duration: duration,
        easing: Easing.linear,
      });
    }, [progress, value]);

    const animatedProps = useAnimatedProps(() => {
      const α = interpolate(
        progress.value,
        [timer, 0],
        [Math.PI * 2, 0],
        Extrapolate.CLAMP,
      );
      return {
        strokeDashoffset: α * radius,
      };
    });
    const Wrapper: ComponentType<
      TouchableOpacityProps | TouchableNativeFeedbackProps
    > = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
      <>
        <View style={styles.mainView}>
          <Svg width={circleSize} height={circleSize}>
            <G
              rotation="270"
              origin={`${radius + strokeWidth / 2}, ${
                radius + strokeWidth / 2
              }`}>
              <AnimatedCircle
                cx={circleSize / 2}
                cy={circleSize / 2}
                r={radius}
                stroke="url(#prefix__paint0_linear)" //prefix__paint0_linear works like a id reference
                strokeDasharray={`${circumference} ${circumference}`}
                strokeWidth={strokeWidth}
                fill="none"
                animatedProps={animatedProps}
              />

              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                fill={seconds > 5 ? 'transparent' : getBlack(0.8)}
                stroke={'#000'}
                strokeWidth={strokeWidth}
                strokeOpacity=".1"
              />
            </G>

            <Defs>
              <LinearGradient
                id="prefix__paint0_linear"
                x1={40}
                y1={0}
                x2={40}
                y2={77}
                gradientUnits="userSpaceOnUse">
                <Stop stopColor={firstLinearColor} />
                <Stop offset={1} stopColor={secondLinearColor} />
              </LinearGradient>
            </Defs>
          </Svg>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                styles.text,
                {
                  color: seconds > 5 ? getBlack(0.8) : 'rgba(255,255,255,1)',
                },
              ]}>
              {seconds}
            </Text>
            {/*{textOrComplete}*/}
          </View>
        </View>
      </>
    );
  },
);

const styles = ScaledSheet.create({
  mainView: {
    position: 'absolute',
    top: '16@s',
    right: '16@s',
  },
  text: {
    fontFamily: MAIN_FONT_500,
    fontSize: '24@s',
    color: getBlack(0.8),
  },
});
