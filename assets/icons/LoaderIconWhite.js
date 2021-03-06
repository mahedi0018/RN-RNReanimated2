import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const LoaderIconWhite = memo(({fill, width, height}) => {
  const useMemoFill = useMemo(() => (!fill ? 'f000000' : fill), [fill]);
  return (
    <Svg width={width} height={height} viewBox="0 0 77 55" fill="none">
      <Path
        d="M7.15 8.189c-2.24.052-4.477.223-6.699.512v39.223a60.896 60.896 0 0133.487 4.952A36.854 36.854 0 007.15 40.816V8.19zM69.404 8.189a63.6 63.6 0 016.699.512v39.223a60.896 60.896 0 00-33.487 4.952 36.855 36.855 0 0126.788-12.06V8.19z"
        fill="#fff"
      />
      <Path
        d="M68.056.303a40.91 40.91 0 00-29.103 14.095V54.34h.675a38.206 38.206 0 0128.428-14.834V.303zm-8.106 9.958v2.781a40.91 40.91 0 00-14.918 7.193v-3.346a43.612 43.612 0 0114.918-6.628zm0 9.267v2.775a40.91 40.91 0 00-14.918 7.193v-3.34a43.61 43.61 0 0114.918-6.628zM8.499.303v39.203A38.207 38.207 0 0136.926 54.34h.676V14.398A40.91 40.91 0 008.499.303zm8.105 9.958a43.612 43.612 0 0114.919 6.628v3.346a40.91 40.91 0 00-14.919-7.193v-2.781zm0 9.267a43.61 43.61 0 0114.919 6.628v3.34a40.91 40.91 0 00-14.919-7.193v-2.776zm0 9.26a43.611 43.611 0 017.826 2.634v2.976a40.909 40.909 0 00-7.826-2.828v-2.781z"
        fill="#fff"
      />
    </Svg>
  );
});
