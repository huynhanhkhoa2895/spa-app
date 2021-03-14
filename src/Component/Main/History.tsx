import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, ScrollView, } from 'react-native';
import { Text, ListItem, Avatar, Card, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getScheduleWaiting } from '../../reducer/action';
import { selectorUser, selectorScheduleWaiting, selectorSpa } from '../../reducer/selector';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Linking } from 'react-native'
import moment from 'moment'
const History = (props: any) => {
    const user = useSelector(selectorUser())
    const spa = useSelector(selectorSpa())
    const dispatch = useDispatch()
    const scheduleWaiting = useSelector(selectorScheduleWaiting())
    const _getScheduleWaiting = () => dispatch(getScheduleWaiting(user.id))
    useFocusEffect(useCallback(() => {
        if (user == null) {
            props.navigation.navigate("Home")
        }
    }, [user]))
    useFocusEffect(useCallback(() => {
        if (user == null) {
            props.navigation.navigate("Home")
        }
        console.log(`scheduleWaiting`, scheduleWaiting)
        _getScheduleWaiting()
    }, []))

    useEffect(() => {
    }, [scheduleWaiting])
    const handleCall = () => {
        Linking.openURL(`tel:${spa.phone}`)
    }
    return (
        <ScrollView>
            <View style={style.viewUser}>
                <ListItem style={{ backgroundColor: "red" }}>
                    <Avatar rounded source={require('../../../asset/img/user.png')} />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                    </ListItem.Content>
                </ListItem>
            </View>

            {
                scheduleWaiting != null && scheduleWaiting.data != null && (
                    <>
                        <View>
                            <Text h3 style={{ textAlign: "center" }}>Lịch đang đặt</Text>
                        </View>
                        <View style={style.view}>
                            <View style={style.viewListItem}>
                                <Card>
                                    <Card.Title>{scheduleWaiting.data.service_name}</Card.Title>
                                    <Card.Divider />
                                    <Card.FeaturedSubtitle>
                                        <View style={style.row}>
                                            <Text>Ngày hẹn: </Text>
                                            <Text>{moment(scheduleWaiting.data.time, "YYYY-MM-DD HH:mm").format("DD/MM/YYYY HH:mm")}</Text>
                                        </View>
                                        <View style={style.row}>
                                            <Text>Trạng thái: </Text>
                                            <Text>{scheduleWaiting.data.status}</Text>
                                        </View>

                                    </Card.FeaturedSubtitle>
                                    <Card.Divider />
                                    <View style={style.row}>
                                        <Button
                                            containerStyle={{ backgroundColor: "#f070a0" }}
                                            buttonStyle={{ backgroundColor: "#f070a0" }}
                                            icon={
                                                <Icon
                                                    name="phone"
                                                    size={15}
                                                    color="white"
                                                />
                                            }
                                            titleStyle={{
                                                marginLeft: 10
                                            }}
                                            onPress={() => handleCall()}
                                            title="Gọi chúng tôi nếu cần hỗ trợ"
                                        />
                                    </View>
                                    {/* <Card.Image source={require('../images/pic2.jpg')}>
                                    <Text style={{marginBottom: 10}}>
                                    The idea with React Native Elements is more about component structure than actual design.
                                    </Text>
                                    <Button
                                    icon={<Icon name='code' color='#ffffff' />}
                                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                    title='VIEW NOW' />
                                </Card.Image> */}
                                </Card>
                            </View>
                        </View>
                    </>
                )
            }

        </ScrollView>
    )
}
const style = StyleSheet.create({
    viewUser: {
        backgroundColor: "#ccc",
    },
    view: {
        justifyContent: 'center',
        alignItems: "center"
    },
    viewListItem: {
        width: "85%",
        margin: "auto",
    },
    row: {
        display: "flex",
        flexDirection: "row"
    }
})
export default History