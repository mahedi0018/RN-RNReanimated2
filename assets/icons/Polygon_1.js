import React, {memo} from 'react';
import Svg, { Path, Polygon } from "react-native-svg"

export const Polygon_1 = memo((props) => {
  return (
    <Svg width={18} height={26} viewBox="0 0 18 26" fill="none" {...props}>
      <Path d="M17 24L3 13 17 2" stroke="#FA0362" strokeWidth={3} />
    </Svg>
  );
});
