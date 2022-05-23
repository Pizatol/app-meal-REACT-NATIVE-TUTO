import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function List({ data }) {

    return data.map((dataPoint) => (

        <View style={styles.listItemContainer} key={dataPoint}>
            <Text style={styles.listText}> {dataPoint} </Text>
        </View>
    ));
}

const styles = StyleSheet.create({
	listItemContainer : {
			borderColor : "#ccc",
			borderWidth : 2,
			borderRadius : 12,
			backgroundColor : "#ccc",
			paddingHorizontal : 8,
			paddingVertical : 6,
			marginVertical : 4,
			marginHorizontal : 40,			
		},
		listText : {
			textAlign : "center"
		},
});
