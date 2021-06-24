import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../styles';

export const CloseIcon = memo(({fill, width, height}) => {
  const useMemoFill = useMemo(() => (!fill ? Colors.DARK_BLUE_GRAY : fill), [fill]);
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z"
        fill={useMemoFill}
      />
    </Svg>
  );
});
