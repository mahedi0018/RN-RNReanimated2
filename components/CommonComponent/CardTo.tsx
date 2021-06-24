import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
export interface Type {
  color: string;
  title: string;
}

const Card: React.FC<Type> = ({color, title}) => {
  return (
    <View style={[styles.root, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    // shadowRadius: 4.65,

    elevation: 10,
    // alignSelf: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
    fontWeight: '600',
  },
});
export default Card;
