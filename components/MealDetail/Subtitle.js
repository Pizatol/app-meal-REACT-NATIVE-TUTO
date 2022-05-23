import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Subtitle( {children} ) {
  return (
	<View style={styles.subtitleContainer}>
	<Text style={styles.subtitle}> {children} </Text>
</View>
  )
}

const styles = StyleSheet.create({
	
	subtitleContainer: {
		borderBottomColor: "#333",
		borderBottomWidth: 2,
		padding: 6,
		marginHorizontal: 40,
		marginVertical : 10,

  },
  subtitle: {
		fontSize: 18,
		fontWeight: "bold",
		color : "#333",
		textAlign: "center",
	  
  },
})