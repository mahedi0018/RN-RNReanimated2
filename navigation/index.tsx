import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AnimationFirst from '../components/Animation/AnimationFirst';
import AnimationSecond from '../components/Animation/AnimationSecond';
import Opacity from '../components/Animation/Opacity';
import Rotation from '../components/Animation/Rotation';
import JellyScroll from '../components/Animation/JellyScroll';
import Example2 from '../components/Animation/Example2';
import MoveWithPan from '../components/Animation/MoveWithPanGesture';
import ProgressBar from '../components/Animation/ProgressBar';
import Scale from '../components/Animation/Scale';
import ScrollAnimation1 from '../components/Animation/ScrollAnimation1';
import HigherOrderAnimations from '../components/Animation/HigherOrderAnimations';
import SwipeButton from '../components/Animation/SwipeButton';
import CircularProgress from '../components/Animation/CircularProgress/index';
import Wave from '../components/Animation/WaveProgress/index';
import LightboxExample from '../components/Animation/AnimatedTransition';
import JsonAnimation from '../components/Animation/LottieAnimation/JsonAnimation';
import LockUnlock from '../components/Animation/LottieAnimation/LockUnlock';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="JsonAnimation">
        <Drawer.Screen name="AnimationFirst" component={AnimationFirst} />
        <Drawer.Screen name="AnimationSecond" component={AnimationSecond} />
        <Drawer.Screen name="Opacity" component={Opacity} />
        <Drawer.Screen name="Rotation" component={Rotation} />
        <Drawer.Screen name="JellyScroll" component={JellyScroll} />
        <Drawer.Screen name="Example2" component={Example2} />
        <Drawer.Screen name="MoveWithPan" component={MoveWithPan} />
        <Drawer.Screen name="ProgressBar" component={ProgressBar} />
        <Drawer.Screen name="Scale" component={Scale} />
        <Drawer.Screen name="ScrollAnimation1" component={ScrollAnimation1} />
        <Drawer.Screen
          name="HigherOrderAnimations"
          component={HigherOrderAnimations}
        />
        <Drawer.Screen name="SwipeButton" component={SwipeButton} />
        <Drawer.Screen name="CircularProgress" component={CircularProgress} />
        <Drawer.Screen name="Wave" component={Wave} />
        <Drawer.Screen name="LightboxExample" component={LightboxExample} />
        <Drawer.Screen name="JsonAnimation" component={JsonAnimation} />
        <Drawer.Screen name="LockUnlock" component={LockUnlock} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const Stack = createStackNavigator<RootStackParamList>();
