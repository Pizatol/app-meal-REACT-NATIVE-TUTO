import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import React from "react";

export default function CategoryGridTile({ title, color }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                android_ripple={{ color: "#ccc" }}
            >
                <View
                    style={[styles.innerContainer, { backgroundColor: color }]}
                >
                    <Text style={styles.title}> {title} </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.4,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
		  borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
