import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context } from '../context/AuthContext'

const AccountScreen = () => {
    const { signout } = useContext(Context)

    return <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={styles.title}>AccountScreen</Text>
        <Spacer>
            <Button
                title="Sign Out"
                onPress={signout}
            />
        </Spacer>
    </SafeAreaView>
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