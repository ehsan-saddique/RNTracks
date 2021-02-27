import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context } from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = useContext(Context)

    return <View>
        <Text style={styles.title}>AccountScreen</Text>
        <Spacer>
            <Button
                title="Sign Out"
                onPress={signout}
            />
        </Spacer>
    </View>
}

AccountScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48
    }
})

export default AccountScreen