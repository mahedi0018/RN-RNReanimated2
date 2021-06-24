import * as React from 'react';
import Svg, {G, Path, Ellipse, Defs, ClipPath} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

function rotate2(props) {
  return (
    <Svg
      {...props}
      width={360}
      height={640}
      viewBox="0 0 360 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#prefix__clip_0_940)">
        <Path fill="#fff" d="M0 0h360v640H0z" />
        <Path
          fill="#C4C4C4"
          style={{
            animation:
              '1s linear 0s infinite normal forwards running Rectangle_2_627',
            transformBox: 'fill-box',
            transformOrigin: '0 0',
          }}
          d="MNaN NaNlNaN NaN NaN NaN NaN NaNz"
        />
        <Ellipse
          rx={35}
          ry={33}
          fill="#C4C4C4"
          style={{
            animation:
              '1s linear 0s infinite normal forwards running Ellipse_1_52',
            transformBox: 'fill-box',
            transformOrigin: '50% 0',
          }}
        />
        <Path
          d="MNaN NaNlNaN NaN NaN NaN NaN NaNz"
          fill="#C4C4C4"
          style={{
            animation:
              '1s linear 0s infinite normal forwards running Polygon_1_9',
            transformBox: 'fill-box',
            transformOrigin: '50% 50%',
          }}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip_0_940">
          <Path d="M0 0h360v640H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default rotate2;
