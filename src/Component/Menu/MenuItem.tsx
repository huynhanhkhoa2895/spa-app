import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { selectorUser } from '../../reducer/selector';
const MenuItem = (props: any) => {
    const user = useSelector(selectorUser())
    const handlePress = () => {
        if (user == null) {
            props.navigation.navigate("Login", { from: props.to })
        } else {
            props.navigation.navigate(props.to)
        }
    }
    return (
        <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={()=>handlePress()} style={{ width: 75, height: 75, backgroundColor: "#f070a0",borderRadius: 100, }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: "center",  }}>
                    <MaterialCommunityIcons name={props.icon} size={26} color={"#fff"} />
                    <Text style={{ color: "#fff", fontSize: 14 }}>{props.title}</Text>
                </View>
            </TouchableOpacity>
            {/* <Button
                onPress={()=>handlePress()}
                buttonStyle={{

                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: 'center'
                }}
                containerStyle={{


                    width: 75,
                    height: 75,
                    backgroundColor: "#f070a0",
                }}
                ViewComponent={() =>

                }
            /> */}
        </View>
    )
}
export default MenuItem