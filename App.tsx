/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import {
  StatusBar,
  View,
  Text
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch } from "react-redux";
import { reducer } from "./src/reducer/reducer";
import createSagaMiddleware from 'redux-saga';
import saga from './src/reducer/saga';
import SplashScreen from './src/SplashScreen';
import Login from './src/Component/Verify/Login';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-toast-message';
import Config from './src/Config';
import ServiceDetail from './src/Component/Home/Service/ServiceDetail';
import Layout from './src/Component/Main/Layout';
import Schedule from './src/Component/Schedule/Schedule';
import Success from './src/Component/Schedule/Success';
import ScheduleConfirm from './src/Component/Schedule/ScheduleConfirm';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)
const Stack = createStackNavigator();
const App = (props: any) => {
  const [displaySplashScreen, setDisplaySplashScreen] = useState(true)

  useEffect(() => {
    // console.log("moment",moment(`2021-02-05 16:00`,"YYYY-MM-DD H:mm").subtract(12,"h").unix())
    setTimeout(() => {
      setDisplaySplashScreen(false)
    }, 1000)
  }, [])
  return (
    <Provider store={store}>
      <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <Stack.Navigator initialRouteName="Layout" screenOptions={{
              // headerTintColor: 'white',
              // headerStyle: {flex: 1, backgroundColor: '#333' ,height: 80,paddingBottom : 0},
            }}>
              <Stack.Screen name="Login"
                component={Login}
                options={({ navigation, route }) => ({
                  title: 'Đăng nhập',
                  headerStyle: {
                    backgroundColor: '#f070a0',
                  },
                  headerTintColor: '#fff',
                  headerLeft: () => (
                    <Button
                      containerStyle={{ backgroundColor: "#f070a0" }}
                      buttonStyle={{ backgroundColor: "#f070a0" }}

                      icon={
                        <Icon
                          name="arrow-back"
                          size={25}
                          color="#fff"
                        />
                      }
                      onPress={() => navigation.navigate("Layout")}
                    />
                  )
                })}
              />
              <Stack.Screen options={{ headerShown: false }} name="Layout">
                {props => <Layout {...props} />}
              </Stack.Screen>
              <Stack.Screen options={{
                title: 'Trang chủ',
                headerStyle: {
                  backgroundColor: '#f070a0',
                },
                headerTintColor: '#fff',
              }}
                name="ServiceDetail">
                {props => <ServiceDetail {...props} />}

              </Stack.Screen>
              <Stack.Screen name="Schedule" component={Schedule} options={{ title: 'Đặt lịch', headerStyle: { backgroundColor: '#f070a0', }, headerTintColor: '#fff', }} />
              <Stack.Screen name="ScheduleSuccess" component={Success} options={{ headerShown: false }} />
              <Stack.Screen name="ScheduleConfirm" component={ScheduleConfirm} options={{ title: 'Xác nhận lịch hẹn', headerStyle: { backgroundColor: '#f070a0', }, headerTintColor: '#fff', }} />
            </Stack.Navigator>
            {/* <ScheduleStack /> */}
          </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </Provider>
  );
};
export default App;
