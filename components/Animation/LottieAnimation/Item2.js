import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Grayscale} from 'react-native-color-matrix-image-filters';
import e43_Good from '../../../assets/images/e43_Good-Day_South-Korea.png';

const ItemPositions = [
  {
    x: 50, //0
    y: 70,
  },
  {
    x: 120, //1
    y: 40,
  },
  {
    x: 10, //2
    y: 120,
  },
  {
    x: 150, //3
    y: 80,
  },
  {
    x: 20, //4
    y: 190,
  },
  {
    x: 60, //5
    y: 100,
  },
  {
    x: 150, //6
    y: 220,
  },
  {
    x: 150, //7
    y: 100,
  },
  {
    x: 70, //8
    y: 300,
  },
  {
    x: 170, //9
    y: 270,
  },
];

export const RenderItem = ({cb, item, index, loopArray}) => {
  const animation = React.useRef(null);
  const [speed, setSpeed] = React.useState(0);
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

  let lottieStyle = {
    left: ItemPositions[index].x,
    top: ItemPositions[index].y,
    // transform: [
    //   {translateX: ItemPositions[index].x},
    //   {translateY: ItemPositions[index].y},
    //   // {scale: 1.2},
    // ],
  };

  useEffect(() => {
    console.log('hhhh', loopArray);
    if (loopArray.length > 0 && loopArray.includes(item.id)) {
      if (animation.current) {
        setSpeed(1);
        animation.current.reset();
        animation.current.play();
      }
    } else if (animation.current) {
      setSpeed(0);
      //animation.current.pause();
    }
  });
  return (
    <View style={[styles.itemContainer, lottieStyle]}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/*<Text style={styles.textStyle}>{item.id}</Text>*/}
        <TouchableOpacity style={[styles.imageView]} onPress={() => onPress()}>
          <View>
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
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ITEMSIZE = 100;
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 5,
    height: ITEMSIZE,
    width: ITEMSIZE,

    // borderRadius: 100,
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImage: {
    // position: 'absolute',
    top: 0,
    left: 0,
    width: ITEMSIZE * 0.6,
    height: ITEMSIZE * 0.6,
    zIndex: 0,
    borderRadius: 100,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 1,
  },
  lottieImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    // backgroundColor: 'red',
    padding: 20,
    backgroundColor: 'transparent',
  },

  lottieImage2: {
    height: ITEMSIZE,
    width: ITEMSIZE,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'transparent',
    // opacity: .8
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  image: {
    flex: 1,
    borderRadius: 50,
    height: ITEMSIZE,
    width: ITEMSIZE,
    backgroundColor: 'red',
    zIndex: 0,
  },

  textStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: ITEMSIZE,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  next: {
    marginTop: 100,
    width: 50,
    height: 30,
    backgroundColor: 'red',
  },
  imageView: {
    width: ITEMSIZE,
    height: ITEMSIZE,
  },
  itemTab: {
    // backgroundColor: 'red',
    padding: 0,
  },
  circleImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: ITEMSIZE,
    height: ITEMSIZE,
    borderRadius: ITEMSIZE / 2,
    borderWidth: 0,
    zIndex: 0,
    backgroundColor: 'red',
  },
  gradientView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: ITEMSIZE,
    height: ITEMSIZE,
    borderRadius: ITEMSIZE / 2,
  },
  gradient: {
    width: ITEMSIZE,
    height: ITEMSIZE,
    borderRadius: ITEMSIZE / 2,
    backgroundColor: 'transparent',
  },
  grayScale: {
    // backgroundColor: 'red',
    borderRadius: ITEMSIZE / 2,
  },
  albumImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: ITEMSIZE,
    height: ITEMSIZE,
    zIndex: 0,
    borderRadius: ITEMSIZE / 2,
    // overlayColor: 'black',
    // tintColor: 'transparent',

    // tintColor: 'pink',
  },
  albumImage2: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: ITEMSIZE,
    height: ITEMSIZE,
    zIndex: 0,
    borderRadius: ITEMSIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumImage3: {
    width: ITEMSIZE * 0.82,
    height: ITEMSIZE * 0.82,
  },
  emptyView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: ITEMSIZE,
    height: ITEMSIZE,
    // backgroundColor: 'transparent',
    zIndex: 1,
    borderRadius: ITEMSIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  emptyView2: {
    width: ITEMSIZE * 0.8,
    height: ITEMSIZE * 0.8,
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: ITEMSIZE / 2,
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

  lottieView: {
    height: ITEMSIZE * 1.2,
    width: ITEMSIZE * 1.2,
  },
});
