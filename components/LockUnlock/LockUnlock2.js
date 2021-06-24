import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';

import LottieView from 'lottie-react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import 'react-native-reanimated';

import {runOnUI} from 'react-native-reanimated';
import e43_Good from '../../assets/images/e43_Good-Day_South-Korea.png';

const LockUnlock = () => {
  const AnimatedGrayscale = Animated.createAnimatedComponent(Grayscale);
  const grayAnimatedVal = useSharedValue(1);
  const [gray, setGray] = useState(1);

  // console.log('derived', derived);
  // Animated.withTiming({})

  // useEffect(() => {
  //   console.log('jjjjjjj');
  //   grayAnimatedVal.value = withTiming(0, {
  //     duration: 1000,
  //   });
  // });

  const onPress = () => {
    // grayAnimatedVal.value = 0.9;
    grayAnimatedVal.value = withTiming(0, {
      duration: 1000,
      // easing: Easing.linear,
    });

    // runOnUI(startAnimation)();
  };
  const startAnimation = (val) => {
    setGray(val);
    // 'worklet';
    // grayAnimatedVal.value = withTiming(0, {
    //   duration: 5000,
    // });
    console.log('ddddd', grayAnimatedVal.value);
    // return grayAnimatedVal.value;
  };
  const derived = useDerivedValue(() => {
    runOnJS(startAnimation)(grayAnimatedVal.value);
    // setGray(grayAnimatedVal.value);
    console.log('derived', grayAnimatedVal.value);
    return grayAnimatedVal.value;
  });
  // console.log('grayAnimatedVal.value', derived);
  // console.log('ddddd', derived.value);
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
        <Animated.Text style={{color: '#fff'}}>{gray}</Animated.Text>
        <Image
          style={[styles.circleImage]}
          source={require('../../assets/images/background.png')}
        />
        <AnimatedGrayscale amount={gray.toFixed(1)} style={styles.grayScale}>
          <Image style={[styles.albumImage]} source={e43_Good} />
        </AnimatedGrayscale>
        {/*<View style={styles.emptyView}>*/}
        {/*  /!*  <View style={styles.emptyView2} />*!/*/}
        {/*</View>*/}
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
