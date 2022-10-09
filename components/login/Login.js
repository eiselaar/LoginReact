import React from "react";
import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Center,
    NativeBaseProvider,
} from "native-base";

export const Login = ({navigation}) => {
     
    return (
        <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "red.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="red" onPress={() =>{
            navigation.navigate("Image_Picker");
          } }>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "red.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} onPress={() =>{
            navigation.navigate("SingUp");
          } }>
            
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    );

};

export default () => {
     
    return ( <NativeBaseProvider> 

        <Login/>

    </NativeBaseProvider>);
};