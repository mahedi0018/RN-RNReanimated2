import * as React from "react"
import Svg, {
    SvgProps,
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"

export const HappyIcon=(props: SvgProps) =>{
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
                d="M9.469 9.143c-1.436 0-2.612 1.135-2.612 2.522 0 1.388 1.176 2.523 2.614 2.523 1.436 0 2.611-1.135 2.611-2.523 0-1.387-1.175-2.522-2.613-2.522zM16.001 25.905c2.816 0 5.464-1.06 7.455-2.983.51-.494.51-1.292 0-1.786a1.34 1.34 0 00-1.848 0c-1.497 1.447-3.489 2.244-5.607 2.244-2.118 0-4.11-.795-5.607-2.242a1.34 1.34 0 00-1.848 0 1.233 1.233 0 000 1.784c1.993 1.923 4.64 2.983 7.455 2.983zM19.92 11.665c0 1.388 1.175 2.523 2.611 2.523 1.438 0 2.614-1.135 2.612-2.523 0-1.387-1.176-2.522-2.612-2.522-1.436 0-2.611 1.135-2.611 2.522z"
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



