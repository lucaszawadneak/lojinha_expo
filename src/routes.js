import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '~/pages/Login';
import Home from '~/pages/Home';
import Item from '~/pages/Item';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerTitleAlign: 'center',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#fcf1df',
                },
                headerBackImage: () => (
                    <Icon name="chevron-left" size={25} color="#000" />
                ),
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Lojinha UFPR',
                    headerBackImage: () => null,
                    headerStyle: {
                        elevation: 0,
                        backgroundColor: '#fcf1df',
                    },
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Item"
                component={Item}
                options={({ route }) => ({
                    title: route.params.item.category.label,
                })}
            />
        </Stack.Navigator>
    );
}
