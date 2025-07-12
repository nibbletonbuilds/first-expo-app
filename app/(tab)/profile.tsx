import React from 'react';
import { Text, View } from 'react-native';

const Profile = () => {
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
                Profile
            </Text>

            <Text>
                Name: Abbas Haidar
            </Text>
            <Text>
                Role: Applied Cryptographer
            </Text>
        </View>
    )
}

export default Profile;