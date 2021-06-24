import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const Polygon2 = memo(({fill, width, height}) => {
  return (
    <Svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M0.999999 2L15 13L0.999998 24" stroke="#38C9F7" stroke-width="3" />
    </Svg>
  );
});
