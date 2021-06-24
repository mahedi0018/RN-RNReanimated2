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
import blob02 from '../../../assets/animation/blob02.json';
import blob04 from '../../../assets/animation/blob04.json';
const ItemPositions = [
  {
    x: 70, //0
    y: 70,
  },
  {
    x: -80, //1
    y: 20,
  },
  {
    x: 30, //2
    y: 50,
  },
  {
    x: -20, //3
    y: -30,
  },
  {
    x: 50, //4
    y: 60,
  },
  {
    x: -130, //5
    y: -90,
  },
  {
    x: 150, //6
    y: 10,
  },
  {
    x: -40, //7
    y: -150,
  },
  {
    x: 50, //8
    y: -20,
  },
  {
    x: -40, //9
    y: -40,
  },
];

export const RenderItem = ({cb, item, index, loopArray}) => {
  const animation = React.useRef(null);
  const [speed, setSpeed] = React.useState(0);
  const [animationName, setAnimationName] = React.useState(blob04);
  const [nowPlay, setNowPlay] = React.useState(0);
  const firstImaAnimation = useSharedValue(0);
  const grayColorAnimation = useSharedValue(0);
  const grayToColorAnimation = useSharedValue(0);
  const lottieOpacityAnimation = useSharedValue(0);
  const onPress = () => {
    setNowPlay(item.id);

    if (loopArray.includes(item.id)) {
      // unLockedItemAnimation();
    } else {
      lockedItemAnimation();
    }
    // let newArrayu = loopArray.filter((e)=>e != item.id)
  };
  const lockedItemAnimation = () => {
    firstImaAnimation.value = withTiming(
      1,
      {
        duration: 100,
        easing: Easing.linear,
      },
      () => {
        grayColorAnimation.value = withTiming(
          1,
          {
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          },
          // () => {
          //   grayToColorAnimation.value = withTiming(
          //     1,
          //     {
          //       duration: 2000,
          //       easing: Easing.linear,
          //       useNativeDriver: false,
          //     },
          //     () => {
          //       lottieOpacityAnimation.value = withTiming(
          //         0.8,
          //         {
          //           duration: 100,
          //           easing: Easing.linear,
          //           useNativeDriver: false,
          //         },
          //         () => {
          //           // ;
          //         },
          //       );
          //     },
          //   );
          // },
        );
      },
    );
    cb(item);
  };
  const fetchJson = () => {
    fetch('../../../assets/animation/blob02.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('dadddd', data);
        // this.setState({levels: data.levels});
      })
      .catch((ex) => {
        console.log('parsing failed', ex);
      });
  };
  // fetchJson();
  // console.log('blob02', (blob02.nm = 'red'));
  const unLockedItemAnimation = () => {
    // console.log('grayToColorAnimation', grayToColorAnimation.value);
    // console.log('grayToColorAnimation222', lottieOpacityAnimation.value);
    // grayToColorAnimation.value = 0.9;

    grayToColorAnimation.value = withTiming(
      1 - grayToColorAnimation.value,
      {
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: false,
      },
      () => {
        lottieOpacityAnimation.value = withTiming(
          0.8,
          {
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          },
          () => {
            grayToColorAnimation.value = withTiming(
              1 - grayToColorAnimation.value,
              {
                duration: 100,
                easing: Easing.linear,
                useNativeDriver: false,
              },
            );
          },
        );
      },
    );

    cb(item);
  };

  const firstAnimation = useAnimatedStyle(() => {
    return {
      opacity: firstImaAnimation.value,
    };
  });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: grayColorAnimation.value,
    };
  });

  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      opacity: grayToColorAnimation.value,
    };
  });
  const styleGradientAnimation = useAnimatedStyle(() => {
    return {
      opacity: lottieOpacityAnimation.value,
    };
  });

  let lottieStyle = {
    transform: [
      {translateX: ItemPositions[index].x},
      {translateY: ItemPositions[index].y},
      // {scale: 1.2},
    ],
  };

  const unselectedAnimation = () => {};
  useEffect(() => {
    // unselectedAnimation();
    // console.log('nowPlaynowPlay', nowPlay);
    loopArray.map((e) => {
      if (e != nowPlay) {
        lottieOpacityAnimation.value = 0;
        grayToColorAnimation.value = 0;
      }
      // else {
      //   setAnimationName(blob04);
      // }
    });
  }, [
    nowPlay,
    setNowPlay,
    loopArray,
    lottieOpacityAnimation.value,
    grayToColorAnimation.value,
  ]);

  return (
    <View style={[styles.itemContainer, lottieStyle]}>
      <TouchableOpacity style={[styles.imageView]} onPress={() => onPress()}>
        {/*<Text style={styles.textStyle}>{item.id}</Text>*/}

        <LottieView
          style={styles.circleImage}
          // ref={animation}
          autoSize={true}
          source={animationName}
          // source={require('../../../assets/animation/blob02.json')}
          autoPlay={true}>
          {/*<Animated.Image*/}
          {/*  style={[styles.circleImage, firstAnimation]}*/}
          {/*  source={require('../../../assets/images/background.png')}*/}
          {/*/>*/}
          <View
            style={{
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                top: 8,
                left: 8,
                right: 8,
                bottom: 8,
              }}>
              <Grayscale style={styles.albumImage}>
                <Animated.Image
                  style={[styles.albumImage, animatedStyles]}
                  source={e43_Good}
                />
              </Grayscale>

              {nowPlay === item.id && (
                <>
                  <Animated.Image
                    style={[styles.albumImage4, animatedStyles2]}
                    source={e43_Good}
                  />

                  {/*<Animated.View*/}
                  {/*  style={[styles.albumImage2, styleGradientAnimation]}>*/}
                  {/*  <LottieView*/}
                  {/*    style={styles.lottieView}*/}
                  {/*    // ref={animation}*/}
                  {/*    autoSize={true}*/}
                  {/*    source={require('../../../assets/animation/pink small size 02.json')}*/}
                  {/*    autoPlay={false}*/}
                  {/*  />*/}
                  {/*</Animated.View>*/}
                </>
              )}
            </View>
          </View>
        </LottieView>
      </TouchableOpacity>
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
    height: ITEMSIZE * 1.3,
    width: ITEMSIZE * 1.3,
    // backgroundColor: 'red',

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
    // zIndex: 1,
    // backgroundColor: 'red',
    padding: 20,
    backgroundColor: 'transparent',
  },

  lottieImage2: {
    height: ITEMSIZE,
    width: ITEMSIZE,
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex: 1,
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
    // backgroundColor: 'red',
    zIndex: 0,
  },

  textStyle: {
    fontSize: 20,
    color: 'red',
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
    // backgroundColor: 'red',
  },
  imageView: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue',
  },
  itemTab: {
    // backgroundColor: 'red',
    padding: 0,
  },
  circleImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: ITEMSIZE * 1.3,
    height: ITEMSIZE * 1.3,
    // borderRadius: ITEMSIZE / 2,
    borderWidth: 0,
    zIndex: 1,

    // backgroundColor: 'red',
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
    // zIndex: 0,
    borderRadius: ITEMSIZE / 2,
    // overlayColor: 'black',
    // tintColor: 'transparent',

    // tintColor: 'pink',
  },
  albumImage4: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: ITEMSIZE,
    height: ITEMSIZE,
    // zIndex: 0,
    borderRadius: ITEMSIZE / 2,
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
    // zIndex: 1,
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
