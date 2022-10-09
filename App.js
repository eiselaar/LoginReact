import React from "react";
import {
  Center,
  NativeBaseProvider,
  View,
} from "native-base";

import MainStack from "./components/navigation/MainStack";
import Login from "./components/login/Login";


export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <MainStack />
      </View>
    </NativeBaseProvider>
  );
}

