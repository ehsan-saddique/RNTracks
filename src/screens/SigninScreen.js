import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import Spacer from '../components/Spacer'
import { Context } from '../context/AuthContext'

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(Context)

    return <View style={styles.container}>
        <NavigationEvents
            onWillFocus={clearErrorMessage}
            onWillBlur={clearErrorMessage}
        />

        <AuthForm
            headerText="Sign In to Your Account"
            submitBtnText="Sign In"
            errorMessage={state.errorMessage}
            onSubmit={signin}
        />

        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.link}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </Spacer>
    </View>
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen