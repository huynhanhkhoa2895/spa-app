import React, { useEffect } from 'react';
import ServiceSpa from './Service/ServiceSpa'
import ImageSliders from '../ImageSliders/ImageSliders'
import { ScrollView } from 'react-native-gesture-handler';
import Loading from '../../Loading';
import {selectorLoading} from '../../reducer/selector'
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Home = (props: any) => {
    const loading = useSelector(selectorLoading())
    useEffect(()=>{
        setItem()
    })
    const setItem = async () => {
        AsyncStorage.setItem("test",JSON.stringify({test : "test1"}))
    }
     
    return (
        <ScrollView style={{  height: "100%", flex: 1, flexDirection: "column",position: "relative" }}>
            {
                loading && (<Loading />)
            }
            <ImageSliders />
            <ServiceSpa navigation={props.navigation} />
        </ScrollView>
    )
}
export default Home