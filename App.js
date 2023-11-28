import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import Home from './app/layout/Home';
import LoginPage from './app/layout/Login/Login';
import Option from './app/components/Option/Option';
import Register from './app/layout/Register/Register';

const Stack = createStackNavigator();

const commonHeaderOptions = {
    headerStyle: {
        backgroundColor: '#32363b',
        height: 80,
    },
    headerTintColor: 'rgb(25 103 210)',
    headerShadowVisible: false,
    headerTitleStyle: {
        fontSize: 18,
    },
    headerBackTitleStyle: {
        fontSize: 18,
    },
};

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#32363b" />
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name = "Home" 
                    component={Home} options={{ ...commonHeaderOptions, headerShown: false }}
                />
                <Stack.Screen name = "Option" component={Option} options={{ ...commonHeaderOptions, headerShown: false }}/>
                <Stack.Screen name = "Login" component={LoginPage}/>
                <Stack.Screen name = "Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
