import React from 'react'
import { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = (props) => {
    const { state, fetchTracks } = useContext(TrackContext)
    return <>
        <NavigationEvents onWillFocus={fetchTracks} />

        <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => {
                    props.navigation.navigate("TrackDetail", { _id: item._id })
                }}>
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            }}
        />
    </>
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({
    item: {
        height: 60,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default TrackListScreen