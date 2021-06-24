import React, {memo} from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

export const TestIconActive = memo(() => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.666 5C10.748 5 10 5.747 10 6.666v2.709a.625.625 0 001.25 0V8.75h.834v.625a.625.625 0 001.25 0V6.666A1.67 1.67 0 0011.666 5zm-.416 2.5v-.834a.417.417 0 01.832 0V7.5h-.832z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M8.408 18.834h4.926a.832.832 0 10-.001-1.666H8.407a.832.832 0 10.001 1.666zM16.666 14.668h-8.26a.834.834 0 010-1.668h8.26a.834.834 0 010 1.668zM16.46 7.291h.416a.625.625 0 000-1.25h-.416v-.416a.625.625 0 00-1.25 0v.416h-.417a.625.625 0 000 1.25h.417v.416a.625.625 0 001.25 0v-.416z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.209 2H6.793A2.294 2.294 0 004.5 4.291v15.416A2.294 2.294 0 006.791 22h11.416a2.294 2.294 0 002.293-2.291V4.29A2.293 2.293 0 0018.209 2zm0 1.666c.345 0 .625.28.625.625v15.416c0 .345-.28.625-.625.625H6.793a.625.625 0 01-.625-.625V4.291c0-.345.28-.625.625-.625h11.416z"
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
