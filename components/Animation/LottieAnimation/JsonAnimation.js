/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import LottieView from 'lottie-react-native';

import 'react-native-reanimated';

import {runOnUI} from 'react-native-reanimated';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {DataItem} from './data';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {RenderItem} from './Item';

const data0 = [
  {name: 'TURQUOISE', code: '#1abc9c'},
  {name: 'EMERALD', code: '#2ecc71'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
];

const spaceSizeWidth = Dimensions.get('window').width * 3;
const spaceSizeHeight = Dimensions.get('window').height;

const displayWidth = Dimensions.get('window').width;
const displayHeight = Dimensions.get('window').height;

class LottieAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      indexOfSubItem: 0,
      loader: true,
      new_array: [],
      loopArray: [],
    };

    const chunkSize = 10;
    while (DataItem.length) {
      const chunk = DataItem.splice(0, chunkSize);
      this.state.new_array.push(chunk);
    }
    console.log('chunkSize');
    setTimeout(() => {
      this.setState({items: data0});
    }, 1000);
  }

  componentDidMount() {
    console.log('mounted');

    setTimeout(() => {
      this.setState({
        items: this.state.new_array[0],
        loader: false,
      });
    }, 2000);
  }

  // let end = 10;
  componentDidUpdate(prevProps, prevState) {
    // if (prevState.items !== this.state.items) {
    //   this.setState({items: data2});
    //   console.log('Component did update!');
    // }
  }

  ItemSeprator = () => (
    <View
      style={{
        // height: 30,
        // width: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    />
  );
  handleScroll = (event) => {
    // spaceSizeHeight
    const zoom = event.nativeEvent.zoomScale;
    const yAxis = event.nativeEvent.contentOffset.y;
    const xAxis = event.nativeEvent.contentOffset.x;
    console.log('xAxis', xAxis);
    console.log('xAxisjjjjjj', yAxis);
    // console.log('xAxis', zoom);
    if (zoom === 1) {
      if (yAxis < -140 && this.state.indexOfSubItem > 0) {
        this.setState({
          items: this.state.new_array[this.state.indexOfSubItem - 1],
          indexOfSubItem: this.state.indexOfSubItem - 1,
        });
      } else if (yAxis > 140 && this.state.indexOfSubItem < 10) {
        this.setState({
          items: this.state.new_array[this.state.indexOfSubItem + 1],
          indexOfSubItem: this.state.indexOfSubItem + 1,
        });
      } else if (xAxis < -100 && this.state.indexOfSubItem > 0) {
        this.setState({
          items: this.state.new_array[this.state.indexOfSubItem - 1],
          indexOfSubItem: this.state.indexOfSubItem - 1,
        });
      } else if (xAxis > 130 && this.state.indexOfSubItem < 10) {
        this.setState({
          items: this.state.new_array[this.state.indexOfSubItem + 1],
          indexOfSubItem: this.state.indexOfSubItem + 1,
        });
      }
    }

    // console.log('xAxis', event.nativeEvent.velocity);
  };
  onGestureEvent = (event) => {
    const {x, y} = event.nativeEvent;
    console.log('HHHHHHHH', x);
    // calculate and set translationXY variables while dragging
    // const translateX = x - this.x0
    // const translateY = y - this.y0
    // this.translate.setValue({ x: translateX, y: translateY })
  };
  cb = (item) => {
    console.log('hhGGGGG', item);
    let loopArray = this.state.loopArray;
    loopArray.push(item.id);
    this.setState({
      loopArray: loopArray,
    });
  };

  render() {
    console.log('render', DataItem.length);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {this.state.loader && (
          <View style={[styles.loader, {zIndex: this.state.loader ? 1 : 0}]}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
        {/*<LottieView*/}
        {/*  style={{*/}
        {/*    height: '100%',*/}
        {/*    width: spaceSizeWidth,*/}
        {/*    justifyContent: 'center',*/}
        {/*    alignItems: 'center',*/}
        {/*  }}*/}
        {/*  source={require('../../assets/animation/circle par.json')}*/}
        {/*  autoPlay*/}
        {/*  loop>*/}
        {/*  <LottieView*/}
        {/*    style={{*/}
        {/*      height: '100%',*/}
        {/*      width: spaceSizeWidth,*/}
        {/*      justifyContent: 'center',*/}
        {/*      alignItems: 'center',*/}
        {/*    }}*/}
        {/*    source={require('../../assets/animation/lines.json')}*/}
        {/*    autoPlay*/}
        {/*    loop>*/}
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // margin: 20,
          }}>
          <FlatList
            style={{
              width: '100%',
              height: '100%',
            }}
            scrollEventThrottle={16}
            onScrollEndDrag={this.handleScroll}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{
              flex: 1,

              justifyContent: 'space-around',
              alignItems: 'stretch',

              backgroundColor: 'black',
            }}
            // ItemSeparatorComponent={this.ItemSeprator}
            maximumZoomScale={2}
            minimumZoomScale={1}
            // onScrollBeginDrag={(e) => console.log(e)}
            initialNumToRender={10}
            scrollEnabled={true}
            removeClippedSubviews={true}
            horizontal={false}
            numColumns={2}
            data={this.state.items}
            maxToRenderPerBatch={10}
            // renderItem={renderItem(this.cb)}
            renderItem={({item, index}) => {
              return (
                <RenderItem
                  // key={i.toString()}
                  cb={this.cb}
                  item={item}
                  index={index}
                  loopArray={this.state.loopArray}
                />
              );
            }}
            // ItemSeparatorComponent={() => (
            //   <View style={{width: 16, height: 20, backgroundColor: 'pink'}} />
            // )}
            keyExtractor={({item}, index) => index.toString()}
            // onEndReachedThreshold={0.1}
            onEndReached={() => {
              console.log('dddddddd');
            }}
          />
        </View>
        {/*  </LottieView>*/}
        {/*</LottieView>*/}
      </View>
    );
  }
}

const benchmark = () => {
  'worklet';
  // global.performance is not yet installed. I will do that soon.

  return (
    <LottieView
      // style={styles.lottieImage}
      source={require('../../../assets/animation/pinks.json')}
      autoPlay
      loop
    />
  );
};

const onPress = () => {
  return runOnUI(benchmark)('Howdy');
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
    // backgroundColor: 'red'
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
    // opacity: .5
  },
  lottieImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: ITEMSIZE,
    width: ITEMSIZE,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'transparent',
    // opacity: .8
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

export default LottieAnimation;
