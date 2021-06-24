import React from "react";
import {ScrollView, View} from "react-native";
import Card from "../CommonComponent/Card";
import Animated, {
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue, withSpring
} from "react-native-reanimated";

const CardList = [
        {
            index: 1,
            color: 'red',
            title: 'HSBC'
        },
        {
            index: 2,
            color: 'green',
            title: 'Dutch-Bangla Bank'
        },
        {
            index: 3,
            color: 'blue',
            title: 'Sonali Bank'
        },
        {
            index: 4,
            color: 'gray',
            title: 'Grameen Bank'
        },
        {
            index: 5,
            color: 'red',
            title: 'Janata Bank'
        },
        {
            index: 6,
            color: 'red',
            title: 'Standard Chartered Bank'
        },
        {
            index: 7,
            color: 'red',
            title: 'Prime Bank Limited'
        },
        {
            index: 8,
            color: 'red',
            title: 'Bangladesh Krishi Bank'
        },
        {
            index: 9,
            color: 'red',
            title: 'BRAC Bank Limited'
        },
        {
            index: 10,
            color: 'black',
            title: 'City Bank Limited'
        }
    ]


const JellyScroll = () => {
    const direction = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler<{time?: number, y?: number}>({
    onScroll: (event, context) =>
    {
        // console.log("event", context)
        const now = new Date().getTime();
        const {y} = event.contentOffset;
        const dt = now - (context?.time ?? 0);
        const dy = y - (context?.y ?? 0)

        const v = dy / dt
        direction.value = dt === 0? 0 : Math.sign(v)
        context.time = now
        context.y = y
    }
})

    return(
        <Animated.ScrollView style={{margin: 40}} scrollEventThrottle={1} {...{ onScroll }}
        showsVerticalScrollIndicator={false}
        >
            {CardList.map(({color,title}, index)=>{
                const styleView = useAnimatedStyle(() => {
                    const skewY = withSpring(interpolate(direction.value,
                    [-1, 0, 1],
                    [-Math.PI / 18, 0, Math.PI / 18]
                    ))
                    return {
                        transform: [{skewY: skewY}]
                    };
                });
                return(
                    <Animated.View key={index} style={[styleView]}>
                        <Card color={color} title={title}/>
                    </Animated.View>
                    )
                }
            )}
        </Animated.ScrollView>
    )
}

export default JellyScroll;
