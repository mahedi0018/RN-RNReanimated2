import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';

const ItemPositions = [
  {
    x: 50, //0
    y: 50,
  },
  {
    x: 0, //1
    y: -10,
  },
  {
    x: 0, //2
    y: 50,
  },
  {
    x: -20, //3
    y: 50,
  },
  {
    x: 0, //4
    y: 0,
  },
  {
    x: 50, //5
    y: 50,
  },
  {
    x: 50, //6
    y: 50,
  },
  {
    x: 20, //7
    y: 0,
  },
  {
    x: 0, //8
    y: 50,
  },
  {
    x: 0, //9
    y: 0,
  },
];

export const RenderItem = ({cb, item, index, loopArray}) => {
  const animation = React.useRef(null);
  const [speed, setSpeed] = React.useState(0);
  let positionArr = [10, 60];
  // console.log('hhhh', index);
  const unLockedMusic = (item) => {
    // loopArray.push(item.id);
  };
  let lottieStyle = {
    transform: [
      {translateX: ItemPositions[index].x},
      {translateY: ItemPositions[index].y},
      // {scale: 1.2},
    ],
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
      <Image
        style={[
          styles.centerImage,
          {opacity: loopArray.includes(item.id) ? 1 : 0.5},
        ]}
        source={item.img}
      />
      <TouchableOpacity
        style={[styles.lottieImage]}
        // style={{backgroundColor: 'white'}}
        onPressOut={() => cb(item)}>
        <View>
          <LottieView
            style={styles.lottieView}
            ref={animation}
            autoSize={true}
            colorFilters={[
              {
                keypath: 'render copm.*',
                color: '#fff',
              },
            ]}
            source={require('../../../assets/animation/pink small size 02.json')}
            // autoPlay={true}
            // loop={true}
            // loop
            speed={speed}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const ITEMSIZE = 160;
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
    // height: ITEMSIZE,
    // width: ITEMSIZE,
    // transform: [
    //   {
    //     scale: 1.2,
    //   },
    // ],
    // opacity: .8
  },
  lottieView: {
    // height: ITEMSIZE,
    // width: ITEMSIZE,
    // transform: [
    //   {
    //     scale: 1.2,
    //   },
    // ],
  },
  lottieImage2: {
    height: 150,
    width: 150,
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
    height: 150,
    width: 150,
    backgroundColor: 'red',
    zIndex: 0,
  },

  textStyle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
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
});
