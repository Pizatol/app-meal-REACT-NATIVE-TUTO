import { StyleSheet, Text, View, FlatList } from "react-native";

import React from "react";

import { MEALS } from "../data/dummy_data";

import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    const renderMealItem = (itemData) => {

		const item = itemData.item
		
		const mealItemProps = {
			title : item.title,
			imageUrl : item.imageUrl,
			affordability : item.affordability,
			complexity : item.complexity,
			duration : item.duration
		}

        return (
            <View>
                <MealItem
                    {...mealItemProps}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});