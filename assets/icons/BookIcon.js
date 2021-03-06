import React, {memo} from 'react';
import Svg, { Path } from "react-native-svg"

export const BookIcon = memo((props) => {
    return (
        <Svg
            {...props}
            width={37}
            height={27}
            viewBox="0 0 37 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M3.294 4.416a30.44 30.44 0 00-3.206.244v18.774c5.459-.74 11.016.081 16.028 2.37a17.642 17.642 0 00-12.822-5.772V4.416zM33.09 4.416c1.073.025 2.143.106 3.207.244v18.774a29.147 29.147 0 00-16.028 2.37 17.642 17.642 0 0112.822-5.772V4.416z"
                fill="#111B2A"
            />
            <Path
                d="M32.445.641a19.58 19.58 0 00-13.93 6.747v19.117h.324a18.288 18.288 0 0113.606-7.1V.641zm-3.88 4.766v1.331a19.58 19.58 0 00-7.14 3.443V8.58a20.874 20.874 0 017.14-3.173zm0 4.436v1.328a19.58 19.58 0 00-7.14 3.443v-1.599a20.873 20.873 0 017.14-3.172zM3.94.641v18.764a18.287 18.287 0 0113.606 7.1h.323V7.388A19.581 19.581 0 003.94.64zm3.88 4.766a20.874 20.874 0 017.14 3.173v1.601a19.58 19.58 0 00-7.14-3.443v-1.33zm0 4.436a20.873 20.873 0 017.14 3.172v1.599a19.58 19.58 0 00-7.14-3.443V9.843zm0 4.432c1.285.301 2.539.723 3.745 1.26v1.425a19.583 19.583 0 00-3.746-1.354v-1.33z"
                fill="#111B2A"
            />
        </Svg>
    );
});
