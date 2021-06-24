import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

// @ts-ignore
export default function Opacity({navigation}) {
  const animation = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    console.log('Animation.Value', animation.value);
    return {
      opacity: withTiming(
        animation.value,
        {
          duration: 5000,
        },
        () => {
          animation.value = 1;
        },
      ),
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.header}>Opacity</Text>
      <Animated.View style={[styles.box, animatedStyles]} />

      <Button onPress={() => (animation.value = 0.3)} title="Click" />
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />

      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
  },
  header: {
    position: 'absolute',
    top: 35,
    fontSize: 25,
  },
});
