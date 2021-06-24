import React, {memo} from 'react';
import Svg, { Path, Polygon } from "react-native-svg"

export const Polygon_2 = memo((props) => {
  return (
    <Svg width={18} height={26} viewBox="0 0 18 26" fill="none" {...props}>
    <Path d="M1 2l14 11L1 24" stroke={props.stroke} strokeWidth={3} />
  </Svg>
  );
});
