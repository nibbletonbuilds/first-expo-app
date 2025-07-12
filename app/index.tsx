import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const index = () => {
	return (
	<View
	style={{
		backgroundColor: "red",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}}
	>

		<Text
			style={{
				fontSize: 40,
				fontWeight: 800,
			}}
		>
		FIRST BLOOD!
		</Text>

		<Link href="/about">
			Learn About Us!
		</Link>
	</View>
	)
}

export default index;