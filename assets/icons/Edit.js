import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../styles';

export const Edit = memo(({fill, width, height}) => {
  const useMemoFill = useMemo(() => (!fill ? Colors.WHITE : fill), [fill]);
  return (
    <Svg width={width} height={height} viewBox="0 0 22 19" fill="none">
      <Path
        d="M11.142 19c4.54 0 7.692-1.715 7.692-3.198V9.176l-7.415 3.429c-.092.046-.185.046-.277.046-.093 0-.186 0-.279-.046L3.45 9.175v6.581C3.449 17.286 6.6 19 11.142 19z"
        fill={useMemoFill}
      />
      <Path
        d="M10.72 11.11a1 1 0 00.844 0l9.772-4.55a1 1 0 000-1.813L11.564.197a1 1 0 00-.845 0L.947 4.747a1 1 0 000 1.813l9.772 4.55z"
        fill={useMemoFill}
      />
    </Svg>
  );
});
