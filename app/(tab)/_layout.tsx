import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
				}}
			/>

			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="person" color={color} />,
				}}
			/>

			<Tabs.Screen
				name="about"
				options={{
					title: "About Us",
					tabBarIcon: ({ color }) => <Ionicons size={28} name="book-sharp" color={color} />,
			}}

			/>
		</Tabs>
	)
};

export default TabLayout;