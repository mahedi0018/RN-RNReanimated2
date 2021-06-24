import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../styles';

export const ArrowDownMD = memo(({fill, width, height}) => {
  const useMemoFill = useMemo(() => (!fill ? Colors.WHITE : fill), [fill]);
  return (
    <Svg width={width} height={height} viewBox="0 0 17 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.263.286l.031 12.2L1.68 6.9.283 8.304l8.02 7.98 7.98-8.02-1.403-1.397-5.586 5.614-.03-12.2-2 .005z"
        fill={useMemoFill}
      />
    </Svg>
  );
});
