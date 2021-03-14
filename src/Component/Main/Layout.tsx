import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeStack from '../Home/HomeStack';
import Contact from './Contact';
import History from './History';
import Store from '../../Component/Store/Store';

import { useDispatch, useSelector } from 'react-redux';
import { selectorUser } from '../../reducer/selector';
import ScheduleStack from '../../Component/Schedule/ScheduleStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getSpa, updateState } from '../../reducer/action';

const Tab = createBottomTabNavigator();
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
  stretch2: {
    width: 25,
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
  const _updateState = (key: any, data: any) => distpatch(updateState(key, data))
  const _getSpa = () => distpatch(getSpa())
  const getUser = async () => {
    const _user = await AsyncStorage.getItem("user")
    if (_user != null && user == null) {
      _updateState("user", JSON.parse(_user))
    }
  }
  useEffect(() => {
    getUser()
    _getSpa()
  }, [user])
  return (
    <>
      <Header
        containerStyle={{ backgroundColor: "#f070a0" }}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={<Image source={require('../../../asset/img/logo.png')} style={styles.stretch} />}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: true,
          tabStyle: { backgroundColor: '#f070a0' },
          activeTintColor: "#fff"
        }}

      // sceneContainerStyle={{ backgroundColor: '#f070a0' }}
      // activeColor="#fff"
      >
        <Tab.Screen name="Home"
          options={{
            tabBarLabel: 'Trang Chủ',
            tabBarIcon: ({ color, focused }) => (
              <Image source={focused ? require(`../../../asset/img/active-01.png`) : require(`../../../asset/img/in-active-01.png`)} style={styles.stretch2} />
            ),
          }}
          component={HomeStack}
        />
        <Tab.Screen name="History"
          options={{
            tabBarLabel: 'Lịch sử',
            tabBarIcon: ({ color, focused }) => (
              <Image source={focused ? require(`../../../asset/img/active-02.png`) : require(`../../../asset/img/in-active-02.png`)} style={styles.stretch2} />
            ),
            // tabBarBadge: 'Đăt lịch',
          }}
          component={History}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              e.preventDefault()
              if (user == null) {
                navigation.push("Login", { from: "History" })
              } else {
                navigation.navigate(route.name)
              }

            },
          })}
        />
        <Tab.Screen name="Store"
          options={{
            tabBarLabel: 'Cửa hàng',
            tabBarIcon: ({ color, focused }) => (

              // <Image source={require(`../../../asset/img/${focused ? "active-03.png" : "in-active-03.png"}`)} style={styles.stretch2} />
              <Image source={focused ? require(`../../../asset/img/active-03.png`) : require(`../../../asset/img/in-active-03.png`)} style={styles.stretch2} />
            ),
          }}
          component={Store}
        />
        <Tab.Screen name="Contact"
          options={{
            tabBarLabel: 'Liên hệ',
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 name="phone" color={color} size={26} />
            ),
          }}
          component={Contact}
        />
      </Tab.Navigator>
    </>

  )
}
export default Layout