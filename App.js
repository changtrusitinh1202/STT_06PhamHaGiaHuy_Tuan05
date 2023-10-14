import Screen_01 from "./Screen/Screen_01";
import Screen_02 from "./Screen/Screen_02";
import Screen_04 from "./Screen/Screen_04";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState,useRef } from 'react';

//export default Screen_01;
//export default Screen_02;

export default function App(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen_01">
                <Stack.Screen
                    name="Screen_01"
                    component={Screen_01}
                >             
                </Stack.Screen>

                <Stack.Screen
                    name="Screen_02"
                    component={Screen_02}
                >             
                </Stack.Screen>
                
                <Stack.Screen
                    name="Screen_04"
                    component={Screen_04}
                >       
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
