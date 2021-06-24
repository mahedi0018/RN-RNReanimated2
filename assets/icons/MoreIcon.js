import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const MoreIcon = memo(({fill}) => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M13.843 4.743a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM12 13.755a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM12 20.982a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
                fill={fill}
            />
        </Svg>
    );
});
