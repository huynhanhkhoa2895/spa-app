import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import 'moment-timezone';
import moment from 'moment';
import { Button } from 'react-native-elements';

const TimeItem = (props: any) => {
    const [activeTime,setActiveTime] =  useState(false)
    useEffect(()=>{
        renderItem()
    },[props.daySelected])
    useEffect(()=>{
        if(props.hourSelected === `${props.hour}:${props.minute}`){
            setActiveTime(true)
        }else{
            setActiveTime(false)
        }
    },[props.hourSelected])
    const handleChangeHourSelected = () => {
        props.handleChangeHourSelected(`${props.hour}:${props.minute}`)
    }
    const renderItem = () => {
        const time = moment(`${props.daySelected} ${props.hour}:${props.minute}`,"YYYY-MM-DD H:mm").subtract(12,"h")
        const isBefore = moment.tz("Asia/Ho_Chi_Minh").isBefore(time);
        let viewCss = {...style.view}
        let textCss = {...style.btnStyle}
        if(isBefore){
            viewCss = {...viewCss,...style.active}
        }else{
            viewCss = {...viewCss,...style.inactive}
        }
        if(activeTime){
            viewCss = {...viewCss,...{backgroundColor: "#fff"}}
            textCss = {...textCss,...{color: "#9534eb"}}
        }
        return (
            <>
                <Button
                    onPress={()=>handleChangeHourSelected()}
                    disabled={!isBefore}
                    containerStyle={viewCss}
                    buttonStyle={{backgroundColor: "transparent"}}
                    disabledStyle={{backgroundColor: "transparent"}}
                    titleStyle={textCss}
                    // ViewComponent={()=>
                    //     renderViewButton()
                    // }
                    title={`${props.hour}:${props.minute}`}
                />
            </>
        )
    }
    return (
        <View>
            {renderItem()}
        </View>
    )
}
const style = StyleSheet.create({
    view : { marginBottom: 10, height: 60, width: 60, borderWidth: 1,justifyContent: "center", borderRadius: 4 },
    active : {borderColor: "#9534eb",backgroundColor: "#9534eb"},
    inactive : {borderColor: "#ccc",backgroundColor: "#ccc"},
    activeTime : {borderColor: "#9534eb",backgroundColor: "#fff"},
    btnStyle: {textAlign: "center", color: "#fff", fontSize: 12}
})
export default TimeItem