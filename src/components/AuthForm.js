import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Spacer from '../components/Spacer'
import { Context } from '../context/AuthContext'

const AuthForm = ({ headerText, submitBtnText, errorMessage, onSubmit }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Spacer>
                <Text h2>{headerText}</Text>
            </Spacer>
            <Spacer />
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <Spacer>
                <Button
                    title={submitBtnText}
                    onPress={() => {
                        onSubmit({ email, password })
                    }
                    }
                />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        alignSelf: 'center'
    }
})

export default AuthForm