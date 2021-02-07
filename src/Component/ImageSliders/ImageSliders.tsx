import React, { useEffect } from 'react';
import { View,StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Config from "../../Config";
import { SliderBox } from "react-native-image-slider-box";
import { useDispatch, useSelector } from 'react-redux';
import {getListBanner} from '../../reducer/action'
import { selectorBanner } from '../../reducer/selector';
const ImageSliders = (props: any) => {
    const distpatch = useDispatch();
    const _getListBanner = ()=>distpatch(getListBanner())
    const banners : any = useSelector(selectorBanner())
    useEffect(()=>{
        _getListBanner()
    },[])
    const renderImage = () => {
        let listImg : any = [];
        if(banners != null){
            banners.map((banner: any)=>{
                const url = Config.API_URL+'/img/banner/'+banner.img;
                listImg.push(url)
            })
        }

        return(
            <>
                {listImg.length > 0 && (<SliderBox images={listImg} autoplay={true} />) }
            </>
        )
    }
    return (
        <View style={style.banner}>
            {renderImage()}
        </View>
    )
}
const style = StyleSheet.create({
    banner : {
        width: "100%",
        // height : 300,
    }
})
export default ImageSliders