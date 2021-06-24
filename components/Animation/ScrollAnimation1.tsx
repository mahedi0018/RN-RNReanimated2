import React from 'react';
import {Alert, ScrollView, StatusBar, StyleSheet, View} from 'react-native';
import Card from '../CommonComponent/CardTo';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
// Mds-MacBook-Pro
const CardList = [
  {
    id: 1,
    color: 'red',
    title: 'HSBC',
  },
  {
    id: 2,
    color: 'green',
    title: 'Dutch-Bangla Bank',
  },
  {
    id: 3,
    color: 'blue',
    title: 'Sonali Bank',
  },
  {
    id: 4,
    color: 'gray',
    title: 'Grameen Bank',
  },
  {
    id: 5,
    color: 'red',
    title: 'Janata Bank',
  },
  {
    id: 6,
    color: 'red',
    title: 'Standard Chartered Bank',
  },
  {
    id: 7,
    color: 'red',
    title: 'Prime Bank Limited',
  },
  {
    id: 8,
    color: 'red',
    title: 'Bangladesh Krishi Bank',
  },
  {
    id: 9,
    color: 'red',
    title: 'BRAC Bank Limited',
  },
  {
    id: 10,
    color: 'black',
    title: 'City Bank Limited',
  },
  {
    id: 11,
    color: 'red',
    title: 'Bangladesh Krishi Bank',
  },
  {
    id: 12,
    color: 'red',
    title: 'Bangladesh Krishi Bank',
  },
  {
    id: 13,
    color: 'red',
    title: 'Bangladesh Krishi Bank',
  },
  {
    id: 14,
    color: 'red',
    title: 'Bangladesh Krishi Bank',
  },
  {
    id: 15,
    color: 'red',
    title: 'Bangladesh Krishi Bank',
  },
];

const spacing = 20;
const ITEM_Size = 150;
const ITEM_ANIMATION_SIZE = ITEM_Size - 5;
const ScrollAnimation1 = () => {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
    // console.log("scrollY", scrollY.value)
  });

  return (
    <Animated.ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      showsVerticalScrollIndicator={false}>
      {CardList.map(({color, title}, index) => {
        const inputRange = [
          -1,
          0,
          ITEM_ANIMATION_SIZE * index,
          ITEM_ANIMATION_SIZE * (index + 2),
        ];
        const opacityInputRange = [
          -1,
          0,
          ITEM_ANIMATION_SIZE * index,
          ITEM_ANIMATION_SIZE * (index + 0.7),
        ];
        const styleView = useAnimatedStyle(() => {
          const scale = interpolate(scrollY.value, inputRange, [1, 1, 1, 0]);

          const opacity = interpolate(scrollY.value, opacityInputRange, [
            1,
            1,
            1,
            0,
          ]);

          return {
            // transform: [{ scaleY: 2 }]
            transform: [{scale: scale}],
            opacity,
          };
        });
        return (
          <Animated.View key={index} style={[styles.root, styleView]}>
            <Card color={color} title={title} />
          </Animated.View>
        );
      })}
    </Animated.ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    height: ITEM_Size,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : spacing,
    paddingHorizontal: spacing,
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
});

export default ScrollAnimation1;
