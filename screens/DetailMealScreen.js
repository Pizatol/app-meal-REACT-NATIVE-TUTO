import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native";
import React from "react";

import MealDetail from "../components/MealDetail";

import { MEALS } from "../data/dummy_data";

export default function DetailMealScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View style={styles.screen}>
		  <ScrollView>

            <Image
                source={{ uri: selectedMeal.imageUrl }}
                style={styles.image}
            />
            <Text> {selectedMeal.title} </Text>

            <MealDetail
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                steps={selectedMeal.steps}
                ingredients={selectedMeal.ingredients}
            />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}> {ingredient} </Text>
            ))}

            <Text> Steps </Text>

            {selectedMeal.steps.map((step) => (
                <Text key={step}> {step} </Text>
            ))}
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
	 title : {
		fontWeight : "bold",
		fontSize : 24,
		margin : 8
	 },
});
