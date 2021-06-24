import React, {memo} from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

export const ShareIcon = memo((props) => {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.158 7.815a4 4 0 10-1.008-1.727L8.842 9.185a4 4 0 100 5.63l5.309 3.093A4.003 4.003 0 0018 23a4 4 0 10-2.839-6.818l-5.31-3.095a4.003 4.003 0 000-2.175l5.307-3.097zM18 3a2 2 0 100 4 2 2 0 000-4zM7.7 10.946a1.012 1.012 0 00.056.095c.155.285.244.612.244.959a1.99 1.99 0 01-.3 1.054A1.999 1.999 0 014 12a2 2 0 013.7-1.054zm8.515 7.15a1.015 1.015 0 00.123-.209 2 2 0 11-.123.21z"
                fill="url(#paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={24.5}
                    y1={29.1117}
                    x2={-11.4517}
                    y2={-19.9373}
                    gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#21A1BD" />
                    <Stop offset={1} stopColor="#0811ED" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
});
