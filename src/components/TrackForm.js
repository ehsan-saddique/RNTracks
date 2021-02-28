import { Button, Input } from "react-native-elements"
import React, { useContext } from 'react'
import Spacer from "./Spacer"
import { Context as LocationContext } from "../context/LocationContext"
import { Context as TrackContext } from "../context/TrackContext"
import useSaveTrack from "../hooks/useSaveTrack"
import { ActivityIndicator } from "react-native"
import { useState } from "react"

const TrackForm = () => {
    const { state, stopRecording, startRecording, changeName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()
    const [isCreatingTrack, setCreatingTrack] = useState(false)

    if (isCreatingTrack) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    return <>
        <Spacer>
            <Input
                value={state.name}
                placeholder="Enter name"
                autoCorrect={false}
                onChangeText={changeName} />
        </Spacer>

        <Spacer>
            {state.recording
                ?
                <Button
                    title="Stop"
                    onPress={stopRecording}
                />
                :
                <Button
                    title="Start Recording"
                    onPress={startRecording}
                />
            }
        </Spacer>

        <Spacer>
            {!state.recording && state.locations.length
                ?
                <Button
                    title="Save"
                    onPress={() => {
                        setCreatingTrack(true)
                        saveTrack(() => {
                            setCreatingTrack(false)
                        })
                    }}
                />
                :
                null
            }
        </Spacer>

    </>
}

export default TrackForm