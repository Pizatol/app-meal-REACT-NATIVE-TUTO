import { StyleSheet, Text, View, FlatList } from "react-native";

import React, { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy_data";

import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    const pressHandler = () => {
        navigation.navigate("DetailMealScreen", {
            categoryId: itemData.item.id,
        })
    }

    const renderMealItem = (itemData) => {
        const item = itemData.item;

        const mealItemProps = {
            id : item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };

        return (
            <View>
                <MealItem {...mealItemProps} onPress={pressHandler} />
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
