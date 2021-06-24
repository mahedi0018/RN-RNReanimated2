import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  useDerivedValue,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import {DrawerActions} from '@react-navigation/native';

// @ts-ignore
export default function Example2({navigation}) {
  const opacity = useSharedValue(0);
  const startAnimation = () => {};
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          scale: interpolate(opacity.value, [0, 1], [0.5, 1]),
        },
      ],
    };
  });
  useEffect(() => {
    opacity.value = withRepeat(withSpring(1), 10, true);
  }, [opacity.value]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.header}>Rotation</Text>
      <Animated.View style={[styles.box, animatedStyle]} />
      {/*<Button onPress={startAnimation} title="Click" />*/}

      <View style={styles.footer}>
        <Button
          title="Open drawer"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />

        <Button
          title="Toggle drawer"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'tomato',
    borderRadius: 50,
  },
  header: {
    position: 'absolute',
    top: 35,
    fontSize: 25,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
