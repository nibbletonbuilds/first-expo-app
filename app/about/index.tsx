import React from 'react';
import { Text, View } from 'react-native';

const about = () => {
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
                    fontSize: 20,
                    fontWeight: 800,
                }}
            >
                About us:
            </Text>

            <Text>
                - we are a group of mathematically oriented computer science folks ready to tackle any computer science and applied mathematics challenge.
            </Text>
            <Text>
                - we do security audits for web3 systems, build and scale machine learning models and make android & web apps.
            </Text>
        </View>
    );
}

export default about;