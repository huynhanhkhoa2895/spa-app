import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, } from 'react-native-elements';
import 'moment-timezone';
import CalendarWrapper from './CalendarWrapper';
import TimeWrapper from './TimeWrapper';
import { useSelector } from 'react-redux';
import { selectorUser } from '../../reducer/selector';
import Service from './Service';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from "moment-timezone"
import Toast from 'react-native-toast-message';
const currentMoment = moment.tz("Asia/Ho_Chi_Minh")
const Schedule = (props: any) => {
    const user = useSelector(selectorUser())
    const [daySelected, setDaySelected] = useState(currentMoment.format("YYYY-MM-DD"))
    const [hourSelected, setHourSelected] = useState(null)
    const [serviceSelected, setServiceSelected] = useState(null)
    useEffect(() => {
    }, [user])
    const handlePress = () => {
        // props.navigation.navigate("ScheduleSuccess")

        if(user == null){
            props.navigation.navigate("Login",{from : "Schedule"})
            return false
        }

        if(daySelected == null){
            Toast.show({
                type: 'info',
                text1: 'Xin lỗi! Bạn chưa chọn ngày',
            });
            return false
        }
        if(hourSelected == null){
            Toast.show({
                type: 'info',
                text1: 'Xin lỗi! Bạn chưa chọn giờ',
            });
            return false
        }
        if(serviceSelected == null){
            Toast.show({
                type: 'info',
                text1: 'Xin lỗi! Bạn chưa chọn dịch vụ',
            });
            return false
        }
        if(user != null && daySelected != null && hourSelected != null && serviceSelected != null){
            props.navigation.push("ScheduleConfirm",{customer : user,time: `${daySelected} ${hourSelected}`,service : serviceSelected})
        }
    }
    const handleChangeDaySelected = (day: any) => {
        setDaySelected(day)
    }
    const handleChangeHourSelected = (hour: any) => {
        setHourSelected(hour)
    }
    const handleChangeServiceSelected = (service: any) => {
        setServiceSelected(service)
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.view}>
                <Text h4 style={styles.text}>1. Chọn ngày</Text>
                <CalendarWrapper handleChangeDaySelected={(day: any) => handleChangeDaySelected(day)} daySelected={daySelected} />
            </View>
            <View style={styles.view}>
                <Text h4 style={styles.text}>2. Chọn Giờ</Text>
                <TimeWrapper handleChangeHourSelected={(day: any) => handleChangeHourSelected(day)} daySelected={daySelected} hourSelected={hourSelected} />
            </View>
            <View style={{ ...styles.view }}>
                <Text h4 style={styles.text}>3. Chọn Dịch Vụ</Text>
                <Service serviceSelected={serviceSelected} handleChangeServiceSelected={(service: any) => handleChangeServiceSelected(service)} />
                <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 10 }}>Mời bạn chọn dịch vụ của chúng tôi. Sau đó chúng tôi sẽ sắp xếp liên hệ lại với bạn</Text>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Button
                        type="outline"
                        buttonStyle={{
                            margin: 'auto',
                            borderColor: "#9534eb"
                        }}
                        containerStyle={{
                            margin: "auto",
                            justifyContent: "center",
                        }}
                        titleStyle={{
                            color: "#9534eb",
                            marginLeft: 5
                        }}
                        icon={
                            <Icon
                                name="check"
                                size={15}
                                color="#9534eb"
                            />
                        }
                        title="Xác nhận lịch đặt"
                        onPress={() => handlePress()}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    view: {
        marginBottom: 10,
        backgroundColor: "#fff",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }
        , shadowOpacity: 0.8, shadowRadius: 2,
    },
    text: {
        marginBottom: 10,
        color: "#9534eb"
    }
})
export default Schedule