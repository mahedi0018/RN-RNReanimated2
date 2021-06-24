import * as React from "react"
import Svg, {
    SvgProps,
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"

export const SadIcon=(props: SvgProps) =>{
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
                d="M9.469 9.143c-1.436 0-2.612 1.133-2.612 2.546 0 1.4 1.176 2.547 2.612 2.547 1.436 0 2.612-1.147 2.612-2.547 0-1.413-1.176-2.546-2.612-2.546zM22.533 24.379c.333 0 .668-.124.923-.373a1.25 1.25 0 000-1.799c-1.993-1.94-4.64-3.01-7.455-3.01-2.815 0-5.464 1.07-7.455 3.01a1.253 1.253 0 000 1.801 1.332 1.332 0 001.848 0A7.977 7.977 0 0116 21.743c2.118 0 4.11.802 5.61 2.264.254.248.587.372.922.372zM19.92 11.69c0 1.4 1.175 2.546 2.611 2.546 1.438 0 2.614-1.147 2.612-2.547 0-1.413-1.176-2.546-2.612-2.546-1.436 0-2.611 1.133-2.611 2.546z"
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



