import * as React from "react"
import Svg, {
    SvgProps,
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"

export const CrossResultIcon=(props: SvgProps) =>{
    return (
        <Svg
            {...props}
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Circle cx={16} cy={16} r={16} fill="url(#prefix__paint0_linear)" />
            <Path
                d="M21.714 21.717a1.295 1.295 0 000-1.83L17.83 16l3.887-3.887a1.293 1.293 0 10-1.829-1.83L16 14.172l-3.888-3.887a1.293 1.293 0 10-1.829 1.829L14.17 16l-3.885 3.888a1.295 1.295 0 00.914 2.207c.33 0 .661-.126.913-.378L16 17.83l3.887 3.887a1.29 1.29 0 001.827 0z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={0}
                    y1={12.571}
                    x2={30.476}
                    y2={21.714}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#1E92C1" />
                    <Stop offset={1} stopColor="#1870CD" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}



