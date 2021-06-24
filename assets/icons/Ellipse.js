import React, {memo} from 'react';
import Svg, { Circle } from "react-native-svg"

export const Ellipse = memo((props) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Circle cx={12} cy={12} r={12} fill="#fff" fillOpacity={0.23} />
    </Svg>
  );
});
