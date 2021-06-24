import React, {memo} from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

export const MyProfileIconActive = memo(() => {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 12a5 5 0 100-10 5 5 0 000 10zm3.32-5a3.32 3.32 0 11-6.64 0 3.32 3.32 0 016.64 0zM14.89 13.112c3.37 0 6.113 2.74 6.11 6.111v1.11c0 .92-.747 1.667-1.667 1.667H4.667C3.747 22 3 21.253 3 20.333v-1.11c0-3.37 2.74-6.11 6.11-6.11h5.78zm4.43 6.11v1.098H4.68v-1.097a4.436 4.436 0 014.43-4.43h5.78a4.434 4.434 0 014.43 4.428z"
                fill="url(#prefix__paint0_linear)"
            />
            <Defs>
                <LinearGradient
                    id="prefix__paint0_linear"
                    x1={24.5}
                    y1={26}
                    x2={-2.71}
                    y2={-19.373}
                    gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#21A1BD" />
                    <Stop offset={1} stopColor="#0811ED" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
});
