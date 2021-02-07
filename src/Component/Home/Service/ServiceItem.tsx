import React from 'react';
import { View, StyleSheet, Dimensions,  } from 'react-native';
import { Image, Text, Button } from 'react-native-elements';
import Config from '../../../Config';
const ServiceItem = (props: any) => {
  const url = Config.API_URL + '/img/service/' + props.service.img;
  const onPress = () => {
    props.navigation.navigate("ServiceDetail",{service : props.service})
  }
  return (
    <View style={styles.view}>
        <Text style={styles.text}>{props.service.name}</Text>
        <Image style={styles.stretch} source={{ uri: url }} />
        <View style={styles.view}>
          <Text>{props.service.description}</Text>
          <Button titleStyle={{color: "#9534eb",fontSize: 11}} buttonStyle={{justifyContent: "flex-end",alignContent: "flex-end"}} type="clear" onPress={()=>onPress()} title={"Xem Tiếp"} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    marginTop: 10
  },
  stretch: {
    width: "100%",
    height: 200,
    resizeMode: 'stretch',
  },
  text: {
    color: "#9534eb",
    marginBottom: 5,
    fontWeight: "bold",
    textTransform: "capitalize"
  }
});
export default ServiceItem