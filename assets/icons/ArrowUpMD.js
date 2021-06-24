import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowUpMD = memo(({fill, width, height}) => {
  const useMemoFill = useMemo(() => (!fill ? 'f000000' : fill), [fill]);
  return (
    <Svg width={width} height={height} viewBox="0 0 17 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.283 16.283v-12.2l5.6 5.6 1.4-1.4-8-8-8 8 1.4 1.4 5.6-5.6v12.2h2z"
        fill={useMemoFill}
      />
    </Svg>
  );
});
