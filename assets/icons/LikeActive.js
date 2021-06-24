import React, {memo} from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

export const LikeActive = memo((props) => {
    return (
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M12 21.054C-8 10 6-2 12 5.588 18-2 32 10 12 21.054z"
                fill="url(#paint0_linear)"
                stroke="url(#paint1_linear)"
                strokeWidth={2}
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear"
                    x1={1.62195}
                    y1={12.1299}
                    x2={22.3778}
                    y2={12.1299}
                    gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#CB2D3E" />
                    <Stop offset={1} stopColor="#EF473A" />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear"
                    x1={1.62195}
                    y1={12.1299}
                    x2={22.3778}
                    y2={12.1299}
                    gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#CB2D3E" />
                    <Stop offset={1} stopColor="#EF473A" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
});
