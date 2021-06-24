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
import {Grayscale, Tint, Sepia} from 'react-native-color-matrix-image-filters';
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

import e43_Good from '../../../assets/images/e43_Good-Day_South-Korea.png';
import AnimatedGrayImage from '../../LockUnlock/AnimatedGrayImage';
import RadialGradient from 'react-native-radial-gradient';
import {Neomorph, NeomorphBlur, Shadow} from 'react-native-neomorph-shadows';

const LockUnlock = () => {
  const firstImaAnimation = useSharedValue(0);
  const progress = useSharedValue(0);
  const secondAnimation = useSharedValue(0);
  const gradientAnimation = useSharedValue(0);
  const onPress = () => {
    firstImaAnimation.value = withTiming(
      1,
      {
        duration: 100,
        easing: Easing.linear,
      },
      () => {
        progress.value = withTiming(
          1,
          {
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          },
          () => {
            secondAnimation.value = withTiming(
              1,
              {
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: false,
              },
              () => {
                gradientAnimation.value = withTiming(0.8, {
                  duration: 100,
                  easing: Easing.linear,
                  useNativeDriver: false,
                });
              },
            );
          },
        );
      },
    );
  };

  const firstAnimation = useAnimatedStyle(() => {

    return {
      opacity: firstImaAnimation.value,
    };
  });
  const animatedStyles = useAnimatedStyle(() => {

    return {
      opacity: progress.value,
    };
  });

  const animatedStyles2 = useAnimatedStyle(() => {

    return {
      opacity: secondAnimation.value,
    };
  });
  const styleGradientAnimation = useAnimatedStyle(() => {
    return {
      opacity: gradientAnimation.value,
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
      <TouchableOpacity style={[styles.imageView]} onPress={() => onPress()}>
        <Image
          style={[styles.circleImage]}
          source={require('../../../assets/images/firstImage.png')}
        />
        <Animated.Image
          style={[styles.circleImage, firstAnimation]}
          source={require('../../../assets/images/background.png')}
        />

        <Grayscale>
          <Animated.Image
            style={[styles.albumImage, animatedStyles]}
            source={e43_Good}
          />
        </Grayscale>
        <Animated.Image
          style={[styles.albumImage, animatedStyles2]}
          source={e43_Good}
        />
        <Animated.View style={[styles.albumImage2, styleGradientAnimation]}>
          <LottieView
            style={styles.lottieView}
            // ref={animation}
            autoSize={true}
            source={require('../../../assets/animation/pink small size 02.json')}
            autoPlay={false}
          />
        </Animated.View>
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
  gradientView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    borderRadius: 100,
    // shadowColor: '#fff',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
  },
  gradient: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'transparent',

    // position: 'absolute',
    // top: 0,
    // left: 0,
    // zIndex: 0,
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
    // overlayColor: 'black',
    // tintColor: 'transparent',

    // tintColor: 'pink',
  },
  albumImage2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: 200,
    zIndex: 0,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumImage3: {
    width: 172,
    height: 172,
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
  iosIconShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  lottieImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    // backgroundColor: 'red',
    padding: 20,
    backgroundColor: 'transparent',
  },
  lottieView: {
    height: 250,
    width: 250,
  },
});

export default LockUnlock;
