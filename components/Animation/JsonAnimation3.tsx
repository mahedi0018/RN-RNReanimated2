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
} from 'react-native';

import LottieView from 'lottie-react-native';

import 'react-native-reanimated';

import {runOnUI} from 'react-native-reanimated';
const data1 = [
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
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  // {name: 'WISTERIA', code: '#8e44ad'},
  // {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  // {name: 'SUN FLOWER', code: '#f1c40f'},
  // {name: 'WISTERIA', code: '#8e44ad'},
  // {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
];
const data2 = [
  {name: 'TURQUOISE', code: '#5555'},
  {name: 'EMERALD', code: '#66666'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
  {name: 'NEPHRITIS', code: '#27ae60'},
  {name: 'BELIZE HOLE', code: '#2980b9'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  {name: 'SUN FLOWER', code: '#f1c40f'},
  {name: 'WISTERIA', code: '#8e44ad'},
  {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  {name: 'SUN FLOWER', code: '#f1c40f'},
  {name: 'EMERALD', code: '#66666'},
  {name: 'PETER RIVER', code: '#3498db'},
  {name: 'AMETHYST', code: '#9b59b6'},
  {name: 'WET ASPHALT', code: '#34495e'},
  {name: 'GREEN SEA', code: '#16a085'},
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
const LottieAnimation = () => {
  // const spaceSizeWidth = (items.length * 200) / 11;
  const spaceSizeWidth = Dimensions.get('window').width * 2;
  const spaceSizeHeight = Dimensions.get('window').height;

  // const spaceSizeHeight = Dimensions.get('window').height * 1.2;
  //
  // const setScrollViewRef = (ref) => {
  //   const AlbumScrollView = ref;
  //   setTimeout(() => {
  //     AlbumScrollView.scrollResponderZoomTo({
  //       width: spaceSizeWidth, animated: false,
  //     });
  //   }, 1);
  // };
  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [screenH, setScreenH] = useState(500);
  const [itemss, setItemss] = useState(data1);
  const [indexOfSubItem, setIndexOfSubItem] = 0;
  // let end = 10;
  const scrollViewRef = useRef();
  const handleScroll = (event) => {
    // spaceSizeHeight
    const yAxis = event.nativeEvent.contentOffset.y;
    console.log(start, end);
    if (yAxis > screenH) {
      setStart((prevState) => prevState + 3);
      setEnd((prevState) => prevState + 10);
      setItemss(data2);
      setScreenH((prevState) => prevState + yAxis);
    }
  };

  // const scrollView = useCallback(
  //   (dataz) => {
  //     return (
  //
  //     );
  //   },
  //   [start, end],
  // );
  // const nextRender = useCallback(
  //   (indexSubList) => {
  //     if (indexSubList + 1 === 1) {
  //       setItemss(data2);
  //     }
  //     setIndexOfSubItem(indexSubList + 1);
  //   },
  //   [setIndexOfSubItem],
  // );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/*<Switch lottieAnimaion={true}/>*/}
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
            style={{width: spaceSizeWidth, padding: 20, flexDirection: 'row'}}>
            {/*<TouchableHighlight onPress={nextRender}>*/}
            {/*  <Text>Next</Text>*/}
            {/*</TouchableHighlight>*/}
            <FlatList
              scrollEventThrottle={16}
              contentContainerStyle={{
                width: spaceSizeWidth,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}
              maximumZoomScale={4}
              minimumZoomScale={0}
              // onScrollBeginDrag={(e) => console.log(e)}
              initialNumToRender={13}
              scrollEnabled={true}
              removeClippedSubviews={true}
              horizontal={false}
              numColumns={3}
              onEndReachedThreshold={5}
              data={itemss}
              updateCellsBatchingPeriod={100}
              getItemLayout={(data, index) => ({
                length: itemss.length,
                offset: itemss.length * index,
                index,
              })}
              // inverted={true}
              // itemVisiblePercentThreshold={100}
              maxToRenderPerBatch={10}
              renderItem={renderItem}
              // renderItem={({ item, index }) => <Items key ={index.toString()} item={item} index={index} />}
              keyExtractor={({item}, index) => index.toString()}
              onEndReached={() => {
                console.log('dddddddd');
              }}
            />
          </View>
        </LottieView>
      </LottieView>
    </View>
  );
};
// const result = await spawnThread(() => {
//     'worklet'
//     // expensive calculation
//     return ...
// })

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

const renderItem = ({item, index}) => {
  let positionArr = [10, 60];
  // console.log("hhhh",onPress)

  return (
    <>
      <View style={[styles.itemContainer, {backgroundColor: item.color}]}>
        {/*{top: positionArr[Math.floor(Math.random() * 1)] } , {left: positionArr[Math.floor(Math.random() * 2)]}*/}
        <Image
          style={styles.centerImage}
          source={require('../../assets/images/MC-Solar_Comme-Dans-Un-Film_France.jpg')}
        />
        <Text style={styles.textStyle}>{item.code}</Text>
        <LottieView
          style={styles.lottieImage}
          source={require('../../assets/animation/pink.json')}
          autoPlay
          loop
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 5,
    height: 150,
    width: 150,
    // backgroundColor: 'red'
  },
  centerImage: {
    // position: 'absolute',
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    zIndex: 0,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: .5
  },
  lottieImage: {
    position: 'absolute',
    top: 0,
    left: 0,
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
    color: 'red',
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
});

export default LottieAnimation;

{
  /*<VirtualizedList*/
}
{
  /*    data={items}*/
}
{
  /*    initialNumToRender={10}*/
}

{
  /*    renderItem={({ item, index }) => <Item title={item.title} index={index}/>}*/
}

{
  /*    getItemCount={getItemCount}*/
}
{
  /*    getItem={getItem}*/
}
{
  /*    keyExtractor={({item}, index) => index.toString()}*/
}
{
  /*    maxToRenderPerBatch={10}*/
}
{
  /*/>*/
}
