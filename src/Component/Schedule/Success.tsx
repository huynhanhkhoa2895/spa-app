import React from 'react';
import { View,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
const Success = (props: any) => {
    const handlePress = () => {
        props.navigation.navigate("Home")
    }
    return (
        <View style={{flex : 1,flexDirection: "column",justifyContent: "center",alignItems: "center",padding: 10}}>
            <TouchableOpacity onPress={()=>handlePress()}>
                <View style={{padding: 10,backgroundColor: "#f070a0",borderRadius: 6}}>
                    <Text style={{textAlign: "center",color: "#fff"}} h4>Đặt lịch Thành Công</Text>
                    <Text style={{textAlign: "center",color: "#fff"}} h3>Bấm vào đây để về trang chủ</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Success