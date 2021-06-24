import React, {useEffect, useMemo, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Animated, {
  useSharedValue,
  interpolate,
  withTiming,
  useAnimatedProps,
  Extrapolate,
  Easing,
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
import AnimatedText from './AnimatedText';
import {CrossResultIcon} from '../../../assets/icons/CrossResultIcon';
import {TestCompletedIcon} from '../../../assets/icons/TestCompleteIcon';
import {HappyIcon} from '../../../assets/icons/HappyIcon';
import {SadIcon} from '../../../assets/icons/SadIcon';
// import {sadSvg} from "../../../assets/svg";

// import {sadSvg} from "../../../assets/svg";

//***** createAnimatedComponent will convert any component to Animated component

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
// const AnimatedText = Animated.createAnimatedComponent(Text)

interface Prop {
  circleSize: number;
  borderWidth: number;
  mainColor?: string;
  firstLinearColor?: string;
  secondLinearColor?: string;
  innerColor?: string;
  percentage: number;
  isSmileIcon?: boolean;
  perFontSize?: number;
}

// @ts-ignore

export const CircularProgress: React.FC<Prop> = React.memo(
  ({
    circleSize,
    borderWidth,

    firstLinearColor,
    secondLinearColor,
    percentage,
    isSmileIcon = false,
    perFontSize = 8,
  }) => {
    const strokeWidth = borderWidth;
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const duration = 2000;
    const smileIconDimension = 32;
    const [value, setValue] = useState(0);
    const progress = useSharedValue(100 - value);
    const animationText = useSharedValue(0);

    useEffect(() => setValue(percentage), [percentage]);

    useEffect(() => {
      progress.value = withTiming(100 - value, {
        duration: duration,
        easing: Easing.linear,
      });
    }, [progress, value]);

    //animation for text
    useEffect(() => {
      animationText.value = withTiming(percentage, {duration: duration});
    }, [animationText.value, percentage]);
    const animatedProps = useAnimatedProps(() => {
      // runOnJS(console.log("ddddd",progress.value))
      const α = interpolate(
        progress.value,
        [0, 100],
        [0, Math.PI * 2],
        Extrapolate.CLAMP,
      );
      return {
        strokeDashoffset: α * radius,
      };
    });
    // const animatedPropsText = useAnimatedProps(() => {
    //   return {percentage: `${percentage}`};
    // });

    // const animatedProps2 = useAnimatedProps(() => {
    //   return {
    //     text: animationText.value,
    //   };
    // });
    const stepText = useDerivedValue(() => {
      // const
      const step = Math.ceil(animationText.value);

      return String(step + '%');
    });
    const staticStyle = {
      smile: {
        position: 'absolute',
        left: circleSize / 2 - smileIconDimension / 2,
        top: -(smileIconDimension / 2 - strokeWidth / 2),
        backgroundColor: 'transparent',
        width: smileIconDimension,
        height: smileIconDimension,
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
    const textOrComplete = () => {
      if (percentage === 100 && !isSmileIcon && circleSize <= 45) {
        return <TestCompletedIcon />;
      } else {
        return <AnimatedText text={stepText} fontSize={perFontSize} />;
      }
    };
    const sadOrSmile = () => {
      if (percentage === 0 && isSmileIcon) {
        return <CrossResultIcon />;
      } else if (percentage > 0 && percentage < 60 && isSmileIcon) {
        return <SadIcon />;
      } else if (percentage >= 60 && isSmileIcon) {
        return <HappyIcon />;
      } else {
        return null;
      }
    };

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Svg width={circleSize} height={circleSize}>
          <G
            rotation="270"
            origin={`${radius + strokeWidth / 2}, ${radius + strokeWidth / 2}`}>
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
              fill="transparent"
              stroke={'#a86cef'}
              strokeWidth={strokeWidth}
              strokeOpacity=".2"
            />
            {isSmileIcon && (
              <View style={[staticStyle.smile]}>{sadOrSmile()}</View>
            )}
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
          {/*{percentage === 100 && !isSmileIcon && (*/}
          {/*    <TestCompletedIcon/>    */}
          {/*)}*/}

          {/*<AnimatedText text={stepText} fontSize={perFontSize}/>*/}
          {textOrComplete()}
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({});
