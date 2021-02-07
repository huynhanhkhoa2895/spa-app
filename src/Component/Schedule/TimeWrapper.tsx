import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import 'moment-timezone';
import TimeHour from './TimeHour';
const TimeWrapper = (props: any) => {
    const renderTime = () => {
        let xhtml = [];
        for (let i = 9; i < 17; i++) {
            let j: string = i < 10 ? "0" + i : i + "";
            xhtml.push(<TimeHour daySelected={props.daySelected} hourSelected={props.hourSelected} handleChangeHourSelected={(hour: any) => props.handleChangeHourSelected(hour)} key={i} hour={j} />)
        }
        return xhtml;
    }
    return (
        <View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                scrollEnabled={true}>
                {renderTime()}
            </ScrollView>
        </View>
    )
}
export default TimeWrapper