import React from 'react';
import { Text, View } from 'react-native';

const About = () => {
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
            About Us
            </Text>

            <Text>
                - we are a group of computer scientists, mathematicians and software engineers. dedicated to solving hard applied mathematics, software engineering and computer science problems.
            </Text>
            <Text>
                - we specialise in security auditing for web3, building & scaling deep learning models and building android & web applications.
            </Text>
        </View>
    )
}

export default About;