import React, {memo} from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

export const ArrowRightRed = memo(({fill, width, height}) => {
    return (
        <Svg
            width={17}
            height={16}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#prefix__clip0)">
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M.3 9h12.2l-5.6 5.6L8.3 16l8-8-8-8-1.4 1.4L12.5 7H.3v2z"
                    fill="#FA0362"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="rotate(-180 8.5 8)" d="M0 0h17v16H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
});
