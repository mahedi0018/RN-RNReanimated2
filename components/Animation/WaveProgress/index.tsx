import React from "react";
import { Wave} from "./Wave";
import {View} from "react-native";

const index = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Wave
                circleSize={80}
                borderWidth={8}
                mainColor={"#262F56"}
                firstLinearColor={"#0811ED"}
                secondLinearColor={"#21A1BD"}
                innerColor={"#0F0E19"}
                percentage={95}
            />
        </View>
    )
}

export default index
