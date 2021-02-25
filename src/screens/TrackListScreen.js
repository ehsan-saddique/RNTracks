import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const TrackListScreen = (props) => {
    return <>
        <Text style={styles.title}>TrackListScreen</Text>
        <Button
            title="Track Detail"
            onPress={() => props.navigation.navigate("TrackDetail")}
        />
    </>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48
    }
})

export default TrackListScreen