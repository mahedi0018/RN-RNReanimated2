import React, {memo} from 'react';
import Svg, { Path } from "react-native-svg"
export const TrainingCourseHeader = memo(({fill, width, height}) => {
    return (
        <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" >
            <Path
                d="M16 9.119c1.467-1.14 3.827-1.86 7.327.107.413.233.673.68.674 1.162v8.033a1.806 1.806 0 00-.607-.1h-.04a1.935 1.935 0 00-.68-.447l-.007-7.487c-2.473-1.393-4.44-1.406-6-.073v8.853c-.62.086-1.066.373-1.333.733v-9.587c-1.56-1.334-3.527-1.32-6.007.073l.007 10.072c1.227-.307 2.367-.46 3.42-.46.846 0 1.626.1 2.353.307-.074.18-.107.373-.107.56 0 .36.093.64.22.86-1.48-.54-3.354-.533-5.567.027A1.327 1.327 0 018 20.459V10.386c0-.48.26-.927.673-1.16 3.5-1.967 5.867-1.247 7.327-.107z"
                fill="#fff"
            />
            <Path
                d="M24 20.26a.61.61 0 00-.605-.608.61.61 0 00-.607.607v.307c0 .053-.04.1-.1.1a.103.103 0 01-.1-.1v-.88a.605.605 0 10-1.207 0v.88c0 .053-.047.1-.107.1a.103.103 0 01-.1-.1v-1.62a.603.603 0 10-1.207 0v1.62c0 .053-.047.1-.1.1-.06 0-.107-.047-.107-.1v-3.96a.603.603 0 10-1.207 0v4.767c-.266-.367-.766-.907-1.413-.907-.607 0-.807.213-.807.4 0 .206.096.296.25.44.232.217.595.557.963 1.593l.093.248c.2.515.694.852 1.246.852h4.132c.51 0 .944-.39.983-.899v-2.84z"
                fill="#fff"
            />
        </Svg>
    );
});
