import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../styles';

export const ScrollIcon = memo(({fill, width, height}) => {
  const useMemoFill = useMemo(() => (!fill ? Colors.DARK_BLUE_GRAY_FILL : fill), [fill]);
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={useMemoFill}>
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M12 5.83l2.46 2.46a.996.996 0 101.41-1.41L12.7 3.7a.996.996 0 00-1.41 0L8.12 6.88a.996.996 0 101.41 1.41L12 5.83zm0 12.34l-2.46-2.46a.996.996 0 10-1.41 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17a.996.996 0 10-1.41-1.41L12 18.17z" />
    </Svg>
  );
});
