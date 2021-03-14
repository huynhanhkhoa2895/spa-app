import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import axios from 'axios';
import Config from '../../Config';
import Toast from 'react-native-toast-message';
import moment from "moment-timezone"

const DOMAIN = Config.API_URL + "/api/"
const ScheduleConfirm = (props: any) => {
    const { customer, time, service, note } = props.route.params
    const handleConfirm = () => {
        axios.post(DOMAIN + "create/schedule", {
            customer: customer.id,
            service: service.value,
            time: time,
            note: note,
            spa: Config.SPA
        }).then((result: any) => {
            const data = result.data;
            if (data.status == 0) {
                Toast.show({
                    type: 'info',
                    text1: 'Có vẻ bạn đã có 1 lịch đã đặt',
                });
            } else {
                props.navigation.push("ScheduleSuccess")
            }

        }).catch((err: any) => {
            Toast.show({
                type: 'info',
                text1: 'Xin lỗi! Có lỗi xảy ra không đặt lịch được',
            });
        })
    }
    const handleBack = () => {
        props.navigation.goBack()
    }
    return (
        <View style={{ width: "100%", flex: 1, flexDirection: "column", justifyContent: "flex-start" }}>
            <Text h3 style={{ justifyContent: "center", alignItems: "center", alignContent: "center", textAlign: "center", marginBottom: 10 }}>Xác Nhận Lịch Đặt</Text>
            <View style={{ width: "100%", height: 50 }}>
                <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
                    <View style={{ width: "50%" }}><Text style={{ textAlign: "right", fontSize: 18 }}>Khách hàng: </Text></View>
                    <View style={{ width: "50%" }}><Text style={{ textTransform: "uppercase", fontSize: 18, fontWeight: "bold" }}>{customer.name}</Text></View>
                </View>
            </View>
            <View style={{ width: "100%", height: 50 }}>
                <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
                    <View style={{ width: "50%" }}><Text style={{ textAlign: "right", fontSize: 18 }}>Thời gian: </Text></View>
                    <View style={{ width: "50%" }}><Text style={{ textTransform: "uppercase", fontSize: 18, fontWeight: "bold" }}>{moment(time, "YYYY-MM-DD HH:mm").format("DD/MM/YYYY HH:mm")}</Text></View>
                </View>
            </View>
            <View style={{ width: "100%", height: 50 }}>
                <View style={{ flex: 1, flexDirection: "row", width: "100%" }}>
                    <View style={{ width: "50%" }}><Text style={{ textAlign: "right", fontSize: 18 }}>Dịch vụ: </Text></View>
                    <View style={{ width: "50%" }}><Text style={{ fontSize: 18 }}>{service.label}</Text></View>
                </View>
            </View>
            <View style={{ width: "100%", height: 110 }}>
                <View style={{ flex: 1, flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "center", alignContent: "center" }}>
                    <Button
                        containerStyle={{ width: "50%", backgroundColor: "#f070a0", borderWidth: 1, borderColor: "#f070a0", marginBottom: 10 }}
                        buttonStyle={{ backgroundColor: "#f070a0" }}
                        titleStyle={{ color: "#fff", textAlign: "center" }}
                        onPressIn={() => handleConfirm()}
                        title="Xác nhận"
                    />
                    <Button
                        containerStyle={{ width: "50%", backgroundColor: "#fff", borderWidth: 1, borderColor: "#f070a0" }}
                        buttonStyle={{ backgroundColor: "#fff" }}
                        titleStyle={{ color: "#f070a0", textAlign: "center" }}
                        onPressIn={() => handleBack()}
                        title="Quay lại"
                    />
                    {/* <View style={{width: "100%",justifyContent: "center",alignContent: "center"}}>
                        <Button
                            containerStyle={{width: "70%",backgroundColor: "#fff",borderWidth: 1,borderColor: "#f070a0"}}
                            titleStyle={{color:"#f070a0",textAlign: "center"}}
                            title="Quay lại"
                        />
                    </View> */}
                </View>
            </View>
        </View>
    )
}
export default ScheduleConfirm