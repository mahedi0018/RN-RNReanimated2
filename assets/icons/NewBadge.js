import React, {memo} from 'react';
import Svg, {Circle} from 'react-native-svg';

export const NewBadge = memo((props) => {
    return (
        <Svg
            width={13}
            height={13}
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <Circle cx={6.5} cy={6.5} r={3.5} fill="#fff" />
            <Circle cx={6.5} cy={6.5} r={6} stroke="#FA0362" />
        </Svg>
    );
});
