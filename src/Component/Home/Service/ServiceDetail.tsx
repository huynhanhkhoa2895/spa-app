import React, { useEffect } from 'react';
import { View,Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Config from '../../../Config';
import Icon from 'react-native-vector-icons/FontAwesome';
import { selectorUser } from '../../../reducer/selector';
import { useSelector } from 'react-redux';
const ServiceDetail = (props: any) => {
    const service = props.route.params.service;
    const user = useSelector(selectorUser())
    const url = Config.API_URL + '/img/service/' + service.img;
    const handlePress = () => {
        if(user == null){
            props.navigation.navigate("Login",{from : "Schedule"})
        }else{
            props.navigation.navigate("Schedule")
        }
    }
    return (
        <View style={{padding: 10}}>
            <Text h3>Dịch vụ {service.name}</Text>
            <Image style={{width: "100%", height: 200,}} source={{uri : url}} />
            <Text style={{textAlign: "justify",margin: 5}}>{service.content}</Text>
            <Button 
                onPress={()=>handlePress()}
                buttonStyle={{
                    margin: 'auto',
                    borderColor: "#fff",
                    backgroundColor: "#9534eb"
                }}
                containerStyle={{
                    margin: "auto",
                    // flex : 1,alignItems: "center",justifyContent: "center",
                    backgroundColor: "#9534eb"
                }}
                titleStyle={{
                    color: "#fff",
                    marginLeft: 5
                }}
                icon={
                    <Icon
                    name="calendar"
                    size={15}
                    color="#fff"
                    />
                }
                title="Đặt lịch" 
            />
        </View>
    )
}
export default ServiceDetail