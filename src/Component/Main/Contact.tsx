import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getListAgency } from '../../reducer/action';
import { selectorAgency, selectorSpa } from '../../reducer/selector';
import { Linking } from 'react-native'

const Contact = (props: any) => {
    const dispatch = useDispatch()
    const spa = useSelector(selectorSpa())
    const _getListAgency = () => dispatch(getListAgency())
    const agency = useSelector(selectorAgency())
    useEffect(() => {
        _getListAgency()
    }, [])
    useEffect(() => {

    }, [agency])
    const handleCall = () => {
        Linking.openURL(`tel:${spa.phone}`)
    }
    return (
        <View>
            <Card>
                <Card.Title>SPA {spa.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={require('../../../asset/img/logo.png')} />
                <View style={{ marginTop: 10 }}>
                    {
                        agency != null && agency.map((item : any)=>
                            <View key={item.id} style={{ marginBottom: 10 }}>
                                <Text><Text style={{fontWeight: "bold"}}>{item.name}</Text>: {item.address}</Text>
                            </View>
                        )
                    }

                    <Button
                        titleStyle={{ marginLeft: 10 }}
                        containerStyle={{ backgroundColor: "#f070a0" }}
                        buttonStyle={{ backgroundColor: "#f070a0" }}

                        onPress={() => handleCall()}
                        icon={<Icon name='phone' color='#ffffff' size={15} />}
                        title='Liên hệ với chúng tôi'
                    />
                </View>
            </Card>
        </View>
    )
}
export default Contact