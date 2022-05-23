import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {Ionicons} from '@expo/vector-icons'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import DetailMealScreen from "./screens/DetailMealScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "white",
                sceneContainerStyle: { backgroundColor: "#f2F2F2" },
                drawerContentStyle : {backgroundColor : "#351401" },
                drawerInactiveTintColor : "white",
                drawerActiveTintColor : "#351401",
                drawerActiveBackgroundColor : '#e4baa1'
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: "All Categories",
                    drawerIcon : ({color, size}) => <Ionicons name='list' color={color} size={size} />
                }}
            />
            <Drawer.Screen name="favorites" component={FavoriteScreen}
            options= {{
                title : 'Your favorites',
                drawerIcon : ({color, size}) => <Ionicons name='heart' color={color} size={size} />
            }}
             />
        </Drawer.Navigator>
    );
};

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#351401" },
                        headerTintColor: "white",
                        contentStyle: { backgroundColor: "#f2F2F2" },
                    }}
                >
                    <Stack.Screen
                        name="All Categories"
                        component={DrawerNavigator}
                        options={{
                            title: "All Categories",
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        options={{
                            title: "About the Meal",
                        }}
                    />
                    <Stack.Screen
                        name="DetailMealScreen"
                        component={DetailMealScreen}
                        options={{
                            title: "About the Meal",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        color: "white",
        borderRadius: 50,
        overflow: "hidden",
    },
});
