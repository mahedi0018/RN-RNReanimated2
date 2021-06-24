import React, {memo, useMemo, FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {Colors} from '../../styles';

export const ArrowUpTr: FC<SvgProps> = memo(({fill, width, height}) => {
    const useMemoFill = useMemo(() => (!fill ? Colors.WHITE : fill), [fill]);
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path d="M0 0l5 5 5-5H0z" fill={useMemoFill} />
        </Svg>
    );
});
