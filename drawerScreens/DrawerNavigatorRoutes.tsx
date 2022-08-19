import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import the bottom tabs
import AllTrips from "./bottomNavigation/AllTrips";
import ActiveTrip from "./bottomNavigation/ActiveTrip";
import Archive from "./bottomNavigation/Archive";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import { AuthContext } from "../AuthProvider";

const Bottom = createBottomTabNavigator();


export default function DrawerNavigatorRoutes() {
  const { username } = React.useContext(AuthContext);



  return (
    <Bottom.Navigator  initialRouteName="All Trips">
      <Bottom.Screen name="All Trips"   children={() => (<AllTrips /> )} />

      <Bottom.Screen name="Active Trip"children={() => (<ActiveTrip /> )} />

      <Bottom.Screen name="Archive" children={() => (<Archive /> )} />

    </Bottom.Navigator>

  )

}