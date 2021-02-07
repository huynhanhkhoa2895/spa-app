import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ServiceDetail from './Service/ServiceDetail';
import Home from './Home';

const Stack = createStackNavigator();
const ScheduleStack = (props: any) => {
    return (
        <Stack.Navigator   
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ServiceDetail" component={ServiceDetail} />
        </Stack.Navigator>
    )
}
export default ScheduleStack