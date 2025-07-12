import React from 'react'
import { Text, View } from 'react-native'

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
				fontSize: 100,
				fontWeight: 800
			}}
		>

		FIRST BLOOD!

		</Text>
	</View>
	)
}

export default index