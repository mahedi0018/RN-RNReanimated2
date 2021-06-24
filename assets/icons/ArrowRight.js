import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowRight = memo(({fill, width, height}) => {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.3 9L12.5001 9L6.9 14.6L8.30005 16L16.3 8L8.30005 -6.99382e-07L6.9 1.4L12.5001 7L0.3 7L0.3 9Z"
        fill="white"
      />
    </Svg>
  );
});
