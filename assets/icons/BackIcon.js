import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const BackIcon = memo((props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"
        fill="#000000"
      />
    </Svg>
  );
});
