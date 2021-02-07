import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Schedule from './Schedule';
import Success from './Success';
import ScheduleConfirm from './ScheduleConfirm';

const Stack = createStackNavigator();
const ScheduleStack = (props: any) => {
    return (
        <Stack.Navigator   
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Schedule"
        >
            <Stack.Screen name="Schedule" component={Schedule} />
            <Stack.Screen name="ScheduleSuccess" component={Success} />
            <Stack.Screen name="ScheduleConfirm" component={ScheduleConfirm} />
        </Stack.Navigator>
    )
}
export default ScheduleStack