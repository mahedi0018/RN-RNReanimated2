import React from "react";
import {Text, View, StyleSheet} from "react-native";
export interface Type {
    color: string,
    title: string
}

const Card : React.FC<Type>= ({color, title}) =>  {
  return (
      <View style={[styles.root,{backgroundColor: color, }]}>
          <Text style={styles.text}>
              {title}
          </Text>
      </View>
  );
};




const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: 'center',
        // alignSelf: 'center',
    },
    text:{
        fontSize: 30,
        color: 'white',
        fontWeight: '600'
    }
});
export default Card;
