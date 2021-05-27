import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export function NoImage() {
  return (
    <View style={styles.container}>
      <Text>Image not availiable</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
  },
});
