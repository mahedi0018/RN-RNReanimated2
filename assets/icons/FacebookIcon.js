import React, {memo, useMemo} from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../../styles';

export const FacebookIcon = memo(({fill, width, height}) => {
    const useMemoFill = useMemo(() => (!fill ? Colors.WHITE : fill), [fill]);
    return (
        <Svg width={width} height={height} viewBox="0 0 13 27">
            <Path
                d="M12.476 13.475H8.621V27H2.779V13.475H0V8.72h2.778V5.645C2.778 3.445 3.87 0 8.672 0L13 .017v4.614H9.86c-.176-.008-.35.02-.513.084-.162.064-.308.16-.426.285a1.128 1.128 0 00-.259.431c-.052.16-.066.33-.041.496v2.798h4.365l-.51 4.75z"
                fill={useMemoFill}
            />
        </Svg>
    );
});
