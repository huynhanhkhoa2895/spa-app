import React from 'react';
import { View } from 'react-native';
import { Text,Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const MenuItem = (props: any) => {
    return (
        <View style={{marginRight: 10}}>
            <Button
                buttonStyle={{

                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                containerStyle={{
                    
                    
                    width : 75,
                    height: 75,
                    backgroundColor: "#9534eb",
                }}
                ViewComponent={()=>
                    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'center',alignItems: "center",}}>
                        <MaterialCommunityIcons name="calendar" size={26} color={"#fff"} />
                        <Text style={{color: "#fff",fontSize: 14}}>Đặt Lịch</Text>
                        
                    </View>
                }
            />
        </View>
    )
}
export default MenuItem