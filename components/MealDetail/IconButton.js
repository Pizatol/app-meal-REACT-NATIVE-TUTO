import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function IconButton({onPress, icon, color}) {
    return (
        <View>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <Ionicons name={icon} size={24} color={color} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
	pressed : {
		opacity : .7,

	},
});
