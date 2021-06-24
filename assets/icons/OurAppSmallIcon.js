import React, {memo} from 'react';
import Svg, { Path } from "react-native-svg"

export const OurAppSmallIcon = memo((props) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.833 14c-.735 0-1.333.598-1.333 1.333V17.5a.5.5 0 001 0v-.833h.666v.833a.5.5 0 001 0v-2.167c0-.735-.598-1.333-1.333-1.333zm-.334 1.667v-.333a.334.334 0 01.667 0v.333h-.667zM15.333 18a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h.833a1.335 1.335 0 010 2.667h-.333v.833a.5.5 0 01-.5.5zm.5-2.333h.333a.333.333 0 100-.666h-.333v.666zM18.166 17.5a.5.5 0 001 0v-.833h.333a1.335 1.335 0 000-2.667h-.833a.5.5 0 00-.5.5v3zm1.333-1.833h-.333v-.666h.333a.334.334 0 010 .666z"
                fill="#E7E7EA"
            />
            <Path
                d="M22 24H10c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2zM10 9.333a.667.667 0 00-.667.667v12c0 .368.299.667.667.667h12a.667.667 0 00.667-.667V10A.667.667 0 0022 9.333H10z"
                fill="#E7E7EA"
            />
        </Svg>
    );
});
