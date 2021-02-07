import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getListService } from '../../../reducer/action';
import { selectorService } from '../../../reducer/selector';
import ServiceItem from './ServiceItem';
const ServiceSpa = (props: any) => {
    const distpatch = useDispatch();
    const services = useSelector(selectorService());
    const _getListService = () => distpatch(getListService())
    useEffect(()=>{
        _getListService()
    },[])
    const renderServiceItem = () => {
        let xhtml : any= []
        if(services != null){
            services.map((service : any)=>{
                xhtml.push(
                    <ServiceItem key={service.id} navigation={props.navigation} service={service} />
                )
            })
        }
        return(
            <>
                <Text h4>Dịch vụ của chúng tôi</Text>
                {xhtml}
            </>
        )
    }
    return (
        <View style={style.banner}>
            
            {renderServiceItem()}
        </View>
    )
}
const style = StyleSheet.create({
    banner: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        padding: 10
    }
})
export default ServiceSpa