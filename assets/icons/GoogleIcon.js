import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../styles';

export const GoogleIcon = memo(({fill, width, height}) => {
  const useMemoFill = useMemo(() => (!fill ? Colors.WHITE : fill), [fill]);
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        d="M27.5 12.47v-.5h-14V16.03h9.725c-.922 4.218-4.708 7.411-9.225 7.411-5.191 0-9.441-4.25-9.441-9.441 0-5.191 4.25-9.441 9.441-9.441 2.472 0 4.829.945 6.567 2.683l.357.356.353-.36 2.141-2.179.35-.356-.355-.35A13.317 13.317 0 0014 .5C6.574.5.5 6.574.5 14S6.574 27.5 14 27.5 27.5 21.426 27.5 14v-1.53z"
        fill={useMemoFill}
        stroke={useMemoFill}
      />
    </Svg>
  );
});
