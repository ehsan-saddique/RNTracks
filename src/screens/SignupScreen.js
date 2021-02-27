import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import Spacer from '../components/Spacer'
import { Context } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(Context)

    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={clearErrorMessage}
            onWillBlur={clearErrorMessage}
        />

        <AuthForm
            headerText="Sign Up for Tracker"
            submitBtnText="Sign Up"
            errorMessage={state.errorMessage}
            onSubmit={signup}
        />

        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text style={styles.link}>Already have an account? Sign in</Text>
            </TouchableOpacity>
        </Spacer>
    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    link: {
        color: "blue"
    }
})

export default SignupScreen