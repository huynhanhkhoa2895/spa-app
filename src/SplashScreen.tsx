import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';
const SplashScreen = (props: any) => {
  return (
    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#f070a0", justifyContent: 'space-between' }}>
      <View></View>
      <View style={{ alignItems: "center", justifyContent: "center" }}><Image source={require('../asset/img/logo.png')} style={styles.stretch} /></View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ alignItems: "center", justifyContent: "center", color: "#fff" }} h4>Spa TML</Text>
        <Text style={{ alignItems: "center", justifyContent: "center", color: "#fff" }} h4>Hân Hạnh Phục Phục Quý Khách</Text>
      </View>
      <View></View>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    width: 70,
    margin: "auto"
  },
  stretch: {
    width: "70%",
    maxHeight: "100%",
    resizeMode: 'stretch',
    margin: "auto"
  },
  navigator: {

  }
})
export default SplashScreen