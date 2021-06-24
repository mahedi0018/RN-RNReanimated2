import React, {memo} from 'react';
import Svg, { Path } from "react-native-svg"

export const AboutUsSmallIcon = memo((props) => {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16 8c-4.422 0-8 3.578-8 8 0 4.422 3.578 8 8 8 4.422 0 8-3.578 8-8 0-4.422-3.578-8-8-8zm0 14.75A6.746 6.746 0 019.25 16c0-3.731 3.02-6.75 6.75-6.75 3.731 0 6.75 3.02 6.75 6.75 0 3.731-3.02 6.75-6.75 6.75z"
                fill="#E7E7EA"
            />
            <Path
                d="M16 14.698a.625.625 0 00-.625.625v4.024a.625.625 0 101.25 0v-4.024a.625.625 0 00-.625-.625zM16 13.933a.844.844 0 100-1.688.844.844 0 000 1.688z"
                fill="#E7E7EA"
            />
        </Svg>
    );
});
