import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import {Login} from "../login/Login";
import {SingUp} from "../singup/SingUp";
import {Image_Picker} from "../imagenpicker/ImagenPicker";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="SingUp"
                    component={SingUp}
                />
                <Stack.Screen
                    name="Image_Picker"
                    component={Image_Picker}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default MainStack;