import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../Home/HomeStack';
import Contact from './Contact';
import History from './History';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUser } from '../../reducer/selector';
import ScheduleStack from '../../Component/Schedule/ScheduleStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateState } from '../../reducer/action';

const Tab = createMaterialBottomTabNavigator();
const styles = StyleSheet.create({
  input: {
    width: 70,
    margin: "auto"
  },
  stretch: {
    width: 35,
    height: 25,
    resizeMode: 'stretch',
    margin: "auto"
  },
  navigator: {

  }
})
const Layout = (props: any) => {
  const user = useSelector(selectorUser())
  const distpatch = useDispatch()
  const _updateState = (key : any,data : any) => distpatch(updateState(key,data)) 
  const getUser = async () => {
    const _user = await AsyncStorage.getItem("user")
    if(_user != null && user == null){
      _updateState("user",JSON.parse(_user))
    }
  }
  useEffect(()=>{
    getUser()
  },[user])
  return (
    <>
      <Header
        containerStyle={{ backgroundColor: "#9534eb" }}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={<Image source={require('../../../asset/img/logo.png')} style={styles.stretch} />}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: '#9534eb' }}
        activeColor="#fff"
      >
        <Tab.Screen name="Home"
          options={{
            tabBarLabel: 'Trang Chủ',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          component={HomeStack}
        />
        <Tab.Screen name="Schedule"
          options={{
            tabBarLabel: 'Đăt lịch ngay',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}
          component={ScheduleStack}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              e.preventDefault()
              console.log(`user`,user)
              if(user == null){
                navigation.push("Login",{from : "Schedule"})
              }else{
                navigation.navigate(route.name)
              }
              
            },
          })}
        />
        <Tab.Screen name="History"
          options={{
            tabBarLabel: 'Lịch sử',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-account" color={color} size={26} />
            ),
          }}
          component={History}
        />
        <Tab.Screen name="Contact"
          options={{
            tabBarLabel: 'Liên hệ',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cellphone" color={color} size={26} />
            ),
          }}
          component={Contact}
        />
      </Tab.Navigator>
    </>

  )
}
export default Layout