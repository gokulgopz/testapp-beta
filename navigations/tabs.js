import React from "react"
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native"
import { createBottomTabNavigator, ButtonTabBar } from "@react-navigation/bottom-tabs"
import Home from '../screen/Home'


import Aptitude from '../screen/Aptitude'
import MockTest from "../screen/Mocktest"
import settings from "../screen/settings"
import Contactus from "../screen/contactus"




const Tab = createBottomTabNavigator();
function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: "absolute",
                    bottom: 25,
                    left: 2,
                    right: 2,
                    elevation: 10,
                    backgroundColor: "#fff",
                    borderRadius: 15,
                    height: 80





                }

            }}>

            <Tab.Screen name="Mock" component={MockTest}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItem: "center", justifyContent: "center", top: 1 }} >
                            <Image
                                source={require("../assets/icons/exam.png")}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 25,
                                    left: 15,
                                    tintColor: focused ? '#233e8b' : '#511281'
                                }}

                            />
                            <Text style={{ color: focused ? '#233e8b' : '#511281', fontSize: 10 }}> Mock Test </Text>

                        </View>
                    )
                }} />
            <Tab.Screen name="Aptitude" component={Aptitude}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItem: "center", justifyContent: "center", top: 1 }} >
                            <Image
                                source={require("../assets/icons/test.png")}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 25,
                                    left: 15,
                                    tintColor: focused ? '#233e8b' : '#511281'
                                }}

                            />
                            <Text style={{ color: focused ? '#233e8b' : '#511281', fontSize: 10 }}> Aptitude Test </Text>

                        </View>
                    )
                }} />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItem: "center", justifyContent: "center", top: 1 }} >
                            <Image
                                source={require("../assets/icons/house.png")}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    left: 0,
                                    tintColor: focused ? '#233e8b' : '#511281'
                                }}

                            />
                            <Text style={{ color: focused ? '#233e8b' : '#511281', fontSize: 10, }}> Home </Text>

                        </View>
                    )
                }}



            />
            <Tab.Screen name="contactus" component={Contactus}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItem: "center", justifyContent: "center", top: 1 }} >
                            <Image
                                source={require("../assets/icons/exam.png")}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 25,
                                    left: 15,
                                    tintColor: focused ? '#233e8b' : '#511281'
                                }}

                            />
                            <Text style={{ color: focused ? '#233e8b' : '#511281', fontSize: 10, alignItems: "center" }}> Contact Us   </Text>

                        </View>
                    )
                }} />
            <Tab.Screen name="settings" component={settings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItem: "center", justifyContent: "center", top: 1 }} >
                            <Image
                                source={require("../assets/icons/mechanical-gears-.png")}
                                resizeMode='contain'
                                style={{
                                    width: 20,
                                    height: 20,
                                    left: 15,
                                    tintColor: focused ? '#233e8b' : '#511281'
                                }}

                            />
                            <Text style={{ color: focused ? '#233e8b' : '#511281', fontSize: 10 }}> Settings  </Text>

                        </View>
                    )
                }} />








        </Tab.Navigator>


    )
}


export default Tabs;