import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const Polygon = memo(({fill, width, height}) => {
  return (
    <Svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M17 24L3 13L17 2" stroke="#38C9F7" stroke-width="3" />
    </Svg>
  );
});
