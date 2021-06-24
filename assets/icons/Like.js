import React, {memo} from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

export const Like = memo((props) => {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M12 21.054C-8 10 6-2 12 5.588 18-2 32 10 12 21.054z"
                stroke="url(#paint0_linear)"
                strokeWidth={2}
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
