import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FoodDetail, Home } from "../screens";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "white" },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="FoodDetail" component={FoodDetail} />
  </Stack.Navigator>
);

export default HomeStack;
