import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MealDetail( {duration, complexity, affordability, steps} ) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}> {duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>			
        </View>
    );
}

const styles = StyleSheet.create({
	details: {
		// flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
  },
  detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
  },
});
