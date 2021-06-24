import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../styles';

export const Hamburger = memo(({fill, width, height}) => {
  const useMemoFill = useMemo(() => (!fill ? Colors.WHITE : fill), [fill]);
  return (
    <Svg width={width} height={height} viewBox="0 0 16 18" fill="none">
      <Path stroke={useMemoFill} strokeWidth={2} d="M0 1h16M0 9h16M0 17h16" />
    </Svg>
  );
});
