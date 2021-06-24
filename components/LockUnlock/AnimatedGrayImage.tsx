import React from 'react';
import Animated, {useAnimatedProps} from 'react-native-reanimated';
import e43_Good from '../../assets/images/e43_Good-Day_South-Korea.png';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const AnimatedGrayscale = Animated.createAnimatedComponent(Grayscale);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const AnimatedGrayImage = ({amount}) => {
  console.log('amountamountamount', amount);
  // const floatVal = Math.floor(amount);
  const animatedProps = useAnimatedProps(() => {
    return {
      // amount: floatVal,
      // value:
      value: amount.value,
    };
  });
  // console.log('amountamount', animatedProps.initial);

  return (
    // <AnimatedGrayscale animatedProps={animatedProps}>
    //   <Animated.Image style={[styles.albumImage]} source={e43_Good} />
    // </AnimatedGrayscale>
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      // value={text.value}
      animatedProps={animatedProps}
      defaultValue="0"
      style={{textAlign: 'center', color: 'white', fontSize: 30}}
    />
  );
};

export default AnimatedGrayImage;

const styles = StyleSheet.create({
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
});
