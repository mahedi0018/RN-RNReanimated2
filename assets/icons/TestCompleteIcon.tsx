import * as React from "react"
import Svg, {
    SvgProps,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"

export const TestCompletedIcon=(props: SvgProps) =>{
    return (
        <Svg
            {...props}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                fill="url(#prefix__paint0_linear)"
            />
            <Path
                d="M16.75 9.703l-5.531 5.532a.849.849 0 01-1.204 0L7.25 12.469a.85.85 0 111.203-1.203l2.164 2.164 4.93-4.93a.85.85 0 111.203 1.203z"
                fill="#FAFAFA"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={21.15}
                    y1={19.65}
                    x2={2.822}
                    y2={3.907}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#0811ED" />
                    <Stop offset={1} stopColor="#21A1BD" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}



