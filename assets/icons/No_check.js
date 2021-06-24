import React, {memo} from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const No_check = memo(({fill, width, height}) => {
    return (
        <Svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <G opacity={0.2}>
                <Path
                    d="M6 0C2.691 0 0 2.691 0 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"
                    fill="#09577B"
                />
                <Path
                    d="M9.041 4.729l-3.25 3.25a.499.499 0 01-.707 0L3.459 6.352a.5.5 0 11.707-.706l1.271 1.271 2.897-2.896a.5.5 0 11.707.707z"
                    fill="#FAFAFA"
                />
            </G>
        </Svg>
    );
});
