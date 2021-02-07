import React, { useState } from 'react';
import { View, Text } from 'react-native';
import 'moment-timezone';
import TimeItem from './TimeItem';
const TimeHour = (props: any) => {
    const renderHour = () => {
        const xhtml: any = []
        const listMinute = ["00", "15", "30", "45"]
        listMinute.map((minute: any) => {
            xhtml.push(<TimeItem daySelected={props.daySelected} hourSelected={props.hourSelected} handleChangeHourSelected={(hour: any) => props.handleChangeHourSelected(hour)} key={props.hour + minute} hour={props.hour} minute={minute} />)
        });
        return xhtml;
    }
    return (
        <View style={{ marginRight: 10, justifyContent: 'center', }}>
            {renderHour()}
        </View>
    )
}
export default TimeHour