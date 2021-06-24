import React, {memo} from 'react';
import Svg, {Mask, Path, G, Defs, LinearGradient, Stop} from 'react-native-svg';

export const CheckedCheckBox = memo((props) => {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={18} height={18}>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 0h14a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm0 9l5 5 9-9-1.41-1.42L7 11.17 3.41 7.59 2 9z"
                    fill="#fff"
                />
            </Mask>
            <G mask="url(#prefix__a)">
                <Path fill="url(#prefix__paint0_linear)" d="M-3-3h24v24H-3z" />
            </G>
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={27}
                    y1={30.667}
                    x2={-10.957}
                    y2={-26.296}
                    gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#21A1BD" />
                    <Stop offset={1} stopColor="#0811ED" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
});
