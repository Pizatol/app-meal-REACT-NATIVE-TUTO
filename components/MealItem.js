import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    Platform,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

export default function MealItem({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
}) {
    const navigation = useNavigation();

    const selectMealItemHander = () => {

        navigation.navigate("DetailMealScreen", {
            mealId : id,
            mealTitle : title,
            mealImg : imageUrl,
            mealDuration : duration,
            mealComplexity : complexity,
            mealAffordability : affordability

        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#c2c2c2" }}
                style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
                onPress={selectMealItemHander}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}> {title} </Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}> {duration}</Text>
                        <Text style={styles.detailItem}>
                            {complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailItem}>
                            {affordability.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 3,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 4,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
