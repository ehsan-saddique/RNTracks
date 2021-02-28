import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context } from '../context/AuthContext'
import { FontAwesome } from "@expo/vector-icons"

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

// AccountScreen.navigationOptions = () => {
//     return {
//         headerShown: false
//     }
// }

AccountScreen.navigationOptions = {
    headerShown: false,
    title: 'Settings',
    tabBarIcon: <FontAwesome name="gear" size={24}></FontAwesome>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48
    }
})

export default AccountScreen