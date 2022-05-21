import React from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy_data";

const renderCategoryItem = (itemData) => {
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
        />
    );
};

export default function CategoriesScreen() {
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
