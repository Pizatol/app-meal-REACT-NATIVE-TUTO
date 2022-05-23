import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    ScrollView,
    Button
} from "react-native";
import React, {useLayoutEffect} from "react";

import MealDetail from "../components/MealDetail";

import { MEALS } from "../data/dummy_data";

import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/MealDetail/IconButton";

export default function DetailMealScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const headerButtonPressHandler = () => {
        console.log("pressed");
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : () => {
                return (
                    <IconButton onPress={headerButtonPressHandler} icon="heart" color="white" />               
                )
            }

        })
    }, [navigation, headerButtonPressHandler])

    return (
        <View style={styles.screen}>
            <ScrollView>
                <Image
                    source={{ uri: selectedMeal.imageUrl }}
                    style={styles.image}
                />
                <Text style={styles.title}> {selectedMeal.title} </Text>

                <MealDetail
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    steps={selectedMeal.steps}
                    ingredients={selectedMeal.ingredients}
                />

                <Subtitle>Ingredients</Subtitle>

                <List data={selectedMeal.ingredients} />

                <Subtitle>Steps</Subtitle>

                <List data={selectedMeal.steps} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    image: {
        height: 350,
        width: "100%",
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "#333",
    },
    subtitleContainer: {
        borderBottomColor: "#333",
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
    },
});
