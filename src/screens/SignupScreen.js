import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const SignupScreen = (props) => {
    return <>
        <Text style={styles.title}>SignupScreen</Text>
        <Button
            title="Sign In"
            onPress={() => props.navigation.navigate("Signin")}
        />
        <Button
            title="Main Flow"
            onPress={() => props.navigation.navigate("mainFlow")}
        />
    </>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48
    }
})

export default SignupScreen