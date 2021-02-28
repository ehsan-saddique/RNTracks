import React from 'react'
import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation }) => {
    const _id = navigation.getParam("_id")
    const { state } = useContext(TrackContext)

    const track = state.find(t => t._id === _id)
    const initialCoords = track.locations[0].coords

    return <>
        <Text style={styles.title}>{track.name}</Text>

        <MapView
            style={styles.map}
            initialRegion={{
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
                ...initialCoords
            }}
        >
            <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
    </>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48
    },
    map: {
        height: 300
    }
})

export default TrackDetailScreen