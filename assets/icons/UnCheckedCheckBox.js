import React, {memo} from 'react';
import Svg, {Mask, Path, G} from 'react-native-svg';

export const UnCheckedCheckBox = memo((props) => {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={18} height={18}>
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 0h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0zm14 16V2H2v14h14z"
                    fill="#fff"
                />
            </Mask>
            <G mask="url(#prefix__a)">
                <Path fill="#09577B" fillOpacity={1} d="M-3-3h24v24H-3z" />
            </G>
        </Svg>
    );
});
