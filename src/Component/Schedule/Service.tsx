import React, { useEffect, useState } from 'react';
import { View,Platform } from 'react-native';
import { Text } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import { getListService } from '../../reducer/action';
import { selectorService } from '../../reducer/selector';
const Service = (props: any) => {
    const services = useSelector(selectorService())
    const distpatch = useDispatch()
    const _getListService = () => distpatch(getListService())
    const [data, setData] = useState<any>([])
    useEffect(() => {
        _getListService()
    }, [])
    useEffect(() => {
        if (services.length > 0) {
            let _data: any = [];
            services.map((service: any) => {
                _data.push({ value: service.id, label: service.name })
            })
            setData(_data)
        }
    }, [services])
    const handleChange = (item : any) => {
        props.handleChangeServiceSelected(item)
    }
    return (
        <View
            style={{
                ...(Platform.OS !== 'android' && {
                    zIndex: 10
                })
            }}
        >
            {
                data.length > 0 && (
                    <DropDownPicker
                        items={data}
                        placeholder="--- Mời bạn chọn Dịch vụ TML"
                        containerStyle={{ height: 40 }}
                        activeLabelStyle={{ color: '#9534eb' }}
                        labelStyle={{ fontSize: 14, color: '#9534eb' }}
                        dropDownMaxHeight={100}
                        onChangeItem={item => handleChange(item)}
                    />
                )
            }

        </View>
    )
}
export default Service