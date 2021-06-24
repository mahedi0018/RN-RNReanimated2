/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  requireNativeComponent,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import LottieView from 'lottie-react-native';

import 'react-native-reanimated';

import {runOnUI} from 'react-native-reanimated';

const data0 = [
  {name: 'TURQUOISE', code: '#1abc9c'},
  {name: 'EMERALD', code: '#2ecc71'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  // {name: 'WET ASPHALT', code: '#34495e'},
  // {name: 'GREEN SEA', code: '#16a085'},
  // {name: 'NEPHRITIS', code: '#27ae60'},
  // {name: 'BELIZE HOLE', code: '#2980b9'},
  // {name: 'WISTERIA', code: '#8e44ad'},
  // {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  // {name: 'SUN FLOWER', code: '#f1c40f'},
  // {name: 'WET ASPHALT', code: '#34495e'},
  // {name: 'GREEN SEA', code: '#16a085'},
  // {name: 'NEPHRITIS', code: '#27ae60'},
  // {name: 'BELIZE HOLE', code: '#2980b9'},
  // {name: 'WISTERIA', code: '#8e44ad'},
  // {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  // {name: 'SUN FLOWER', code: '#f1c40f'},
  // {name: 'WISTERIA', code: '#8e44ad'},
  // {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
];
const data1 = [
  {name: 'TURQUOISE', code: '#1'},
  {name: 'EMERALD', code: '#66666'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  // {name: 'SUN FLOWER', code: '#f1c40f'},
  // {name: 'WISTERIA', code: '#8e44ad'},
  // {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  // {name: 'SUN FLOWER', code: '#f1c40f'},
  // {name: 'EMERALD', code: '#66666'},
  // {name: 'PETER RIVER', code: '#3498db'},
  // {name: 'AMETHYST', code: '#9b59b6'},
  // {name: 'WET ASPHALT', code: '#34495e'},
  // {name: 'GREEN SEA', code: '#16a085'},
];
const data2 = [
  {name: 'TURQUOISE', code: '#2'},
  {name: 'EMERALD', code: '#2'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
];
const data3 = [
  {name: 'TURQUOISE', code: '#3'},
  {name: 'EMERALD', code: '#3'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
];
const dataItem = [
  {name: 'TURQUOISE', code: '#1abc9c'},
  {name: 'EMERALD', code: '#2ecc71'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  {name: 'SUN FLOWER', code: '#f1c40f'},
  {name: 'CARROT', code: '#e67e22'},
  {name: 'ALIZARIN', code: '#e74c3c'},
  {name: 'CLOUDS', code: '#ecf0f1'},
  {name: 'CONCRETE', code: '#95a5a6'},
  {name: 'ORANGE', code: '#f39c12'},
  {name: 'PUMPKIN', code: '#d35400'},
  {name: 'POMEGRANATE', code: '#c0392b'},
  {name: 'SILVER', code: '#bdc3c7'},
  {name: 'ASBESTOS', code: '#7f8c8d'},
  {name: 'TURQUOISE', code: '#1abc9c'},
  {name: 'EMERALD', code: '#2ecc71'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  {name: 'SUN FLOWER', code: '#f1c40f'},
  {name: 'CARROT', code: '#e67e22'},
  {name: 'ALIZARIN', code: '#e74c3c'},
  {name: 'CLOUDS', code: '#ecf0f1'},
  {name: 'CONCRETE', code: '#95a5a6'},
  {name: 'ORANGE', code: '#f39c12'},
  {name: 'PUMPKIN', code: '#d35400'},
  {name: 'POMEGRANATE', code: '#c0392b'},
  {name: 'SILVER', code: '#bdc3c7'},
  {name: 'ASBESTOS', code: '#7f8c8d'},
  {name: 'TURQUOISE', code: '#1abc9c'},
  {name: 'EMERALD', code: '#2ecc71'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  {name: 'SUN FLOWER', code: '#f1c40f'},
  {name: 'CARROT', code: '#e67e22'},
  {name: 'ALIZARIN', code: '#e74c3c'},
  {name: 'CLOUDS', code: '#ecf0f1'},
  // {name: 'CONCRETE', code: '#95a5a6'},
  // {name: 'ORANGE', code: '#f39c12'},
  // {name: 'PUMPKIN', code: '#d35400'},
  // {name: 'POMEGRANATE', code: '#c0392b'},
  // {name: 'SILVER', code: '#bdc3c7'},
  // {name: 'ASBESTOS', code: '#7f8c8d'},
  // {name: 'TURQUOISE', code: '#1abc9c'},
  // {name: 'EMERALD', code: '#2ecc71'},
  // {name: 'PETER RIVER', code: '#3498db'},
  // {name: 'AMETHYST', code: '#9b59b6'},
  // {name: 'WET ASPHALT', code: '#34495e'},
  // {name: 'GREEN SEA', code: '#16a085'},
  // {name: 'NEPHRITIS', code: '#27ae60'},
  // {name: 'BELIZE HOLE', code: '#2980b9'},
  // {name: 'WISTERIA', code: '#8e44ad'},
  // {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  // {name: 'SUN FLOWER', code: '#f1c40f'},
  // {name: 'CARROT', code: '#e67e22'},
  // {name: 'ALIZARIN', code: '#e74c3c'},
  // {name: 'CLOUDS', code: '#ecf0f1'},
  // {name: 'CONCRETE', code: '#95a5a6'},
  // {name: 'ORANGE', code: '#f39c12'},
  // {name: 'PUMPKIN', code: '#d35400'},
  // {name: 'POMEGRANATE', code: '#c0392b'},
  // {name: 'SILVER', code: '#bdc3c7'},
  // {name: 'ASBESTOS', code: '#7f8c8d'},
  // {name: 'TURQUOISE', code: '#1abc9c'},
  // {name: 'EMERALD', code: '#2ecc71'},
  // {name: 'PETER RIVER', code: '#3498db'},
  // { name: 'AMETHYST', code: '#9b59b6' },
  // { name: 'WET ASPHALT', code: '#34495e' },
  // { name: 'GREEN SEA', code: '#16a085' },
  // { name: 'NEPHRITIS', code: '#27ae60' },
  // { name: 'BELIZE HOLE', code: '#2980b9' },
  // { name: 'WISTERIA', code: '#8e44ad' },
  // { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  // { name: 'SUN FLOWER', code: '#f1c40f' },
  // { name: 'CARROT', code: '#e67e22' },
  // { name: 'ALIZARIN', code: '#e74c3c' },
  // { name: 'CLOUDS', code: '#ecf0f1' },
  // { name: 'CONCRETE', code: '#95a5a6' },
  // { name: 'ORANGE', code: '#f39c12' },
  // { name: 'PUMPKIN', code: '#d35400' },
  // { name: 'POMEGRANATE', code: '#c0392b' },
  // { name: 'SILVER', code: '#bdc3c7' },
  // { name: 'ASBESTOS', code: '#7f8c8d' },
  // { name: 'TURQUOISE', code: '#1abc9c' },
  // { name: 'EMERALD', code: '#2ecc71' },
  // { name: 'PETER RIVER', code: '#3498db' },
  // { name: 'AMETHYST', code: '#9b59b6' },
  // { name: 'WET ASPHALT', code: '#34495e' },
  // { name: 'GREEN SEA', code: '#16a085' },
  // { name: 'NEPHRITIS', code: '#27ae60' },
  // { name: 'BELIZE HOLE', code: '#2980b9' },
  // { name: 'WISTERIA', code: '#8e44ad' },
  // { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  // { name: 'SUN FLOWER', code: '#f1c40f' },
  // { name: 'CARROT', code: '#e67e22' },
  // { name: 'ALIZARIN', code: '#e74c3c' },
  // { name: 'CLOUDS', code: '#ecf0f1' },
  // { name: 'CONCRETE', code: '#95a5a6' },
  // { name: 'ORANGE', code: '#f39c12' },
  // { name: 'PUMPKIN', code: '#d35400' },
  // { name: 'POMEGRANATE', code: '#c0392b' },
  // { name: 'SILVER', code: '#bdc3c7' },
  // { name: 'ASBESTOS', code: '#7f8c8d' },
  // { name: 'TURQUOISE', code: '#1abc9c' },
  // { name: 'EMERALD', code: '#2ecc71' },
  // { name: 'PETER RIVER', code: '#3498db' },
  // { name: 'AMETHYST', code: '#9b59b6' },
  // { name: 'WET ASPHALT', code: '#34495e' },
  // { name: 'GREEN SEA', code: '#16a085' },
  // { name: 'NEPHRITIS', code: '#27ae60' },
  // { name: 'BELIZE HOLE', code: '#2980b9' },
  // { name: 'WISTERIA', code: '#8e44ad' },
  // { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  // { name: 'SUN FLOWER', code: '#f1c40f' },
  // { name: 'CARROT', code: '#e67e22' },
  // { name: 'ALIZARIN', code: '#e74c3c' },
  // { name: 'CLOUDS', code: '#ecf0f1' },
  // { name: 'CONCRETE', code: '#95a5a6' },
  // { name: 'ORANGE', code: '#f39c12' },
  // { name: 'PUMPKIN', code: '#d35400' },
  // { name: 'POMEGRANATE', code: '#c0392b' },
  // { name: 'SILVER', code: '#bdc3c7' },
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
      indexOfSubItem: 1,
      loader: true,
    };
    setTimeout(() => {
      this.setState({items: data0});
    }, 1000);
  }

  componentDidMount() {
    console.log('mounted');

    setTimeout(() => {
      this.setState({
        items: data1,
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

  nextRender = (indexSubList) => {
    if (indexSubList + 1 === 2) {
      this.setState({
        items: data2,
      });
    }
    if (indexSubList + 1 === 3) {
      this.setState({
        items: data3,
      });
    }
    this.setState({
      indexOfSubItem: indexSubList + 1,
    });
  };
  ItemSeprator = () => (
      <View
          style={{
            // height: 30,
            // width: "100%",
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
      />
  );

  render() {
    console.log('render');
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

          <TouchableHighlight
              onPress={() => this.nextRender(this.state.indexOfSubItem)}
              style={styles.next}>
            <Text>Next</Text>
          </TouchableHighlight>

          <LottieView
              style={{
                height: '100%',
                width: spaceSizeWidth,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../../assets/animation/circle par.json')}
              autoPlay
              loop>
            <LottieView
                style={{
                  height: '100%',
                  width: spaceSizeWidth,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                source={require('../../assets/animation/lines.json')}
                autoPlay
                loop>
              <View
                  style={{
                    // width: spaceSizeWidth,
                    padding: 20,
                    // flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                {/*{this.state.indexOfSubItem > 0 && (*/}
                <FlatList
                    scrollEventThrottle={16}
                    contentContainerStyle={{
                      // width: 300,
                      // height: 600,
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 0,
                      // backgroundColor: 'red',
                    }}
                    // ItemSeparatorComponent={this.ItemSeprator}
                    maximumZoomScale={2}
                    minimumZoomScale={1}
                    // onScrollBeginDrag={(e) => console.log(e)}
                    initialNumToRender={10}
                    scrollEnabled={true}
                    removeClippedSubviews={true}
                    horizontal={false}
                    numColumns={3}
                    onEndReachedThreshold={5}
                    data={this.state.items}
                    // updateCellsBatchingPeriod={100}
                    // getItemLayout={(data, index) => ({
                    //   length: this.state.items.length,
                    //   offset: this.state.items.length * index,
                    //   index,
                    // })}
                    // inverted={true}
                    // itemVisiblePercentThreshold={100}
                    maxToRenderPerBatch={10}
                    renderItem={renderItem}
                    // renderItem={({ item, index }) => <Items key ={index.toString()} item={item} index={index} />}
                    keyExtractor={({item}, index) => index.toString()}
                    onEndReached={() => {
                      // console.log('dddddddd');
                    }}
                />
                {/*)}*/}
              </View>
            </LottieView>
          </LottieView>
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
          source={require('../../assets/animation/pinks.json')}
          autoPlay
          loop
      />
  );
};

const onPress = () => {
  return runOnUI(benchmark)('Howdy');
};

const ItemPositions = [
  {
    x: 50,
    y: 50,
  },
  {
    x: 0,
    y: -10,
  },
  {
    x: 0,
    y: 50,
  },
  {
    x: 0,
    y: 50,
  },
  {
    x: 0,
    y: 0,
  },
  {
    x: 50,
    y: 50,
  },
  {
    x: 50,
    y: 50,
  },
  {
    x: 20,
    y: 0,
  },
  {
    x: 0,
    y: 50,
  },
  {
    x: 0,
    y: 0,
  },
];
const renderItem = ({item, index}) => {
  let positionArr = [10, 60];
  console.log('hhhh', index);


  let lottieStyle = {
    transform: [
      {translateX: ItemPositions[index].x},
      {translateY: ItemPositions[index].y},
      // {scale: 1.4},
    ],
  };


  return (
      <>
        <View
            style={[
              styles.itemContainer,
              lottieStyle,
              {backgroundColor: item.color},
            ]}>
          <Image
              style={[styles.centerImage]}
              source={
                index % 2 == 0
                    ? require('../../assets/images/Tell_Floating-Lands_Belgium.jpg')
                    : require('../../assets/images/MC-Solar_Comme-Dans-Un-Film_France.jpg')
              }
          />
          {/*<Text style={styles.textStyle}>{index}</Text>*/}
          <LottieView
              style={[styles.lottieImage]}
              source={require('../../assets/animation/pink small size 02.json')}
              autoPlay
              loop
          />
        </View>
      </>
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
