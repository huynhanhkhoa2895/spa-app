import { useFocusEffect } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Config from '../../Config';
// import {number_format} from '../../helper/function';

import { getListProduct } from '../../reducer/action';
import { selectorCategory, selectorProduct } from '../../reducer/selector';
const Store = (props: any) => {
    const product = useSelector(selectorProduct())
    const category = useSelector(selectorCategory())
    const distpatch = useDispatch()
    const _getListProduct = () => distpatch(getListProduct())
    useFocusEffect(useCallback(() => {
        _getListProduct()
    }, []))
    const renderMain = () => {
        let xhtml: any = [];
        Object.keys(product).forEach((category) => {
            let xhtmlCate: any = []
            for (let p of product[category]) {
                xhtmlCate.push(
                    <View key={p.id} style={{ width: "50%", alignItems: "center", }}>
                        <View style={{ width: "100%", padding: 10, }}>
                            <View style={{ borderWidth: 1, borderRadius: 6, borderColor: "#ddd", padding: 10, }}>
                                <Image style={{ width: "100%", height: 200 }} source={{ uri: Config.API_URL + "/img/product/" + p.img }} />
                                <Text style={{ textTransform: "capitalize" }}>{p.name} </Text>
                                <Text>{p.price} VND</Text>
                            </View>
                        </View>
                    </View>
                )

            }
            xhtml.push(
                <View style={style.view} key={"key" + category}>
                    <Text style={style.text}>{category}</Text>
                    {xhtmlCate}
                </View>
            )
        })
        return (
            <View>
                {xhtml}
            </View>
        )
    }
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View>
                {renderMain()}
            </View>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 18,
        textTransform: "capitalize",
        fontWeight: "bold",
        width: "100%",
        marginLeft: 10,
    }
})
export default Store