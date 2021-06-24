import React, {memo} from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

export const MoreIconActive = memo(() => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M13.843 4.743a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM12 13.755a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM12 20.982a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
                fill="url(#prefix__paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={24.5}
                    y1={26}
                    x2={-2.71}
                    y2={-19.373}
                    gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#21A1BD" />
                    <Stop offset={1} stopColor="#0811ED" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
});
