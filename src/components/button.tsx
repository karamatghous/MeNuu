import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Button(props) {
  const {title, wrapperStyle, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.Buttoncontainer, wrapperStyle]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Buttoncontainer: {
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonText: {
    textAlign: 'center',
    color: '#08C0CA',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    lineHeight: 20,
  },
});
