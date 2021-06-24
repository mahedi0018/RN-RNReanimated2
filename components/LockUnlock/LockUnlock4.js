import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

import LottieView from 'lottie-react-native';
// import {Grayscale, Tint, Sepia} from 'react-native-color-matrix-image-filters';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  runOnJS,
  useAnimatedProps,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import {Emboss, Grayscale} from 'react-native-image-filter-kit';

import e43_Good from '../../assets/images/e43_Good-Day_South-Korea.png';
import AnimatedGrayImage from './AnimatedGrayImage';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const AnimatedGrayscale = Animated.createAnimatedComponent(Grayscale);
const LockUnlock = () => {
  // const AnimatedGrayscale = Animated.createAnimatedComponent(Grayscale);
  // const AnimatedTint = Animated.createAnimatedComponent(Tint);
  const grayAnimatedVal = useSharedValue(10);
  const [gray, setGray] = useState(10);
  const [value, setValue] = useState(0);
  const progress = useSharedValue(value);

  const onPress = () => {
    progress.value = withTiming(10 - value, {
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    });
  };
  const startAnimation = () => {
    let value = 1;
    setTimeout(() => {
      value = 0.5;
    }, 1000);
    return value;
  };
  const animatedProps = useAnimatedProps(() => {
    const α = interpolate(progress.value, [1, 9], [0, 10], Extrapolate.CLAMP);

    let new1 = Math.ceil(α) / 10;
    console.log('hhhhhh', new1);
    return {
      amount: new1,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/**/}
      <TouchableOpacity style={[styles.imageView]} onPress={() => onPress()}>
        {/*<Animated.Text style={{color: '#fff'}}>{derived.value}</Animated.Text>*/}
        <Image
          style={[styles.circleImage]}
          source={require('../../assets/images/background.png')}
        />

        <Grayscale
          amount={0}
          image={
            <Image
              style={styles.albumImage}
              source={e43_Good}
              resizeMode={'contain'}
            />
          }
        />
        {/*<AnimatedGrayscale animatedProps={animatedProps}>*/}

        {/*<AnimatedTint animatedProps={animatedProps}>*/}
        {/*  <Sepia>*/}
        {/*    <Image style={[styles.albumImage]} source={e43_Good} />*/}
        {/*  </Sepia>*/}
        {/*</AnimatedTint>*/}
        {/*</AnimatedGrayscale>*/}

        {/*<AnimatedTextInput*/}
        {/*  underlineColorAndroid="transparent"*/}
        {/*  editable={false}*/}
        {/*  // value={text.value}*/}
        {/*  animatedProps={animatedProps}*/}
        {/*  style={{textAlign: 'center', color: 'red', fontSize: 30}}*/}
        {/*/>*/}
        {/*{benchmark()}*/}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    width: 200,
    height: 200,
    // borderRadius: 100,
    // backgroundColor: 'red',
  },
  itemTab: {
    // backgroundColor: 'red',
    padding: 0,
  },
  circleImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 0,
    zIndex: 0,

    // tintColor: 'gray',
  },
  grayScale: {
    // backgroundColor: 'red',
    borderRadius: 100,
  },
  albumImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    zIndex: 0,
    borderRadius: 100,
    // tintColor: 'transparent',

    // opacity: 1,

    // tintColor: 'pink',
  },
  emptyView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    // backgroundColor: 'transparent',
    zIndex: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  emptyView2: {
    width: 170,
    height: 170,
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 100,
  },
});

export default LockUnlock;
