import React, {memo, FC} from 'react';
import Svg, {Path} from 'react-native-svg';

export const Circel: FC = memo(() => {
    // const useMemoFill = useMemo(() => (!fill ? Colors.WHITE : fill), [fill]);
    return (
        <Svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M0.5625 6.75C0.252136 6.75 0 6.49786 0 6.1875V1.31287C0 1.08463 0.137329 0.87973 0.347717 0.793213C0.557007 0.705322 0.798706 0.753662 0.959656 0.914612L2.65842 2.61337C4.31653 0.962952 6.57339 0 9 0C13.9622 0 18 4.03775 18 9C18 9.41391 17.6646 9.75037 17.2496 9.75037C16.8346 9.75037 16.4993 9.41391 16.4993 9C16.4993 4.86447 13.1344 1.49963 8.9989 1.49963C6.97961 1.49963 5.10754 2.3085 3.72601 3.68097L5.83429 5.78925C5.99634 5.9502 6.04358 6.19189 5.95679 6.40228C5.87027 6.61267 5.66428 6.75 5.43713 6.75H0.5625Z"
                fill="#E7E7EA"
            />
            <Path
                d="M17.4375 11.25C17.7479 11.25 18 11.5021 18 11.8125V16.6871C18 16.9154 17.8627 17.1203 17.6523 17.2068C17.5836 17.2362 17.5095 17.2496 17.4375 17.2496C17.29 17.2496 17.1472 17.1933 17.0392 17.0854L15.3405 15.3866C13.6835 17.037 11.4255 18 9 18C4.03775 18 0 13.9622 0 9C0 8.58609 0.335358 8.24963 0.750366 8.24963C1.16537 8.24963 1.50073 8.58609 1.50073 9C1.50073 13.1355 4.86557 16.5004 9.0011 16.5004C11.0204 16.5004 12.8925 15.6915 14.274 14.319L12.1657 12.2108C12.0037 12.0498 11.9564 11.8081 12.0432 11.5977C12.1297 11.3873 12.3357 11.25 12.5629 11.25H17.4375Z"
                fill="#E7E7EA"
            />
        </Svg>
    );
});
