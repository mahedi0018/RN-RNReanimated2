import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const CryptoAnalyticsIconHeader = memo((props) => {
    return (
        <Svg
            width={18}
            height={17}
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <Path
                d="M16.999 2.217a2.217 2.217 0 01-4.164 1.062l-1.749.432a2.217 2.217 0 01-3.465 1.818L4.937 7.87a2.217 2.217 0 11-.732-.834l2.684-2.34a2.217 2.217 0 013.928-2.06l1.747-.432A2.217 2.217 0 0117 2.217z"
                fill="#fff"
            />
            <Path
                d="M.74 17a.739.739 0 110-1.479h1.477v-2.217a.74.74 0 111.48 0v2.217H8.13v-7.39a.74.74 0 111.479 0v7.39h4.433v-8.87a.74.74 0 111.48 0v8.87H17A.74.74 0 1116.999 17H.739z"
                fill="#fff"
            />
        </Svg>
    );
});
