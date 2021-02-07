import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import MenuItem from './MenuItem';
const win: any = Dimensions.get('window');
const menuWidth = (win.width * 85) / 100
const Menu = (props: any) => {
    return (
        <View style={{ justifyContent: 'center', marginTop: 50, marginBottom: 50, marginLeft: ((win.width / 2) - (menuWidth / 2)) }}>
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 6,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 4,
                width: menuWidth,
                height: 100,
                padding: 10
            }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </View>
            </View>
        </View>
    )
}
export default Menu