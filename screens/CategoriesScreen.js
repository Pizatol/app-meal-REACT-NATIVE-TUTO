import React from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy_data";


export default function CategoriesScreen({navigation}) {

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId : itemData.item.id,
                
            })
        };
    
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    };
    


    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({});
