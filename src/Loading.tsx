import React from 'react';
import { View,StyleSheet,Image,Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
const win: any = Dimensions.get('window');
const Loading = (props: any) => {
    return (
        
        <View style={{position: "absolute",height: win.height,width: win.width,zIndex: 1,backgroundColor: 'rgba(255,255,255, 0.5)'}}>
            <View style={{flex: 1,alignItems: "center",justifyContent: "center"}}>
                <Image source={require('../asset/img/loading.gif')} />
            </View>
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
export default Loading