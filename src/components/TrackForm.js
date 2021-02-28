import { Button, Input } from "react-native-elements"
import React, { useContext } from 'react'
import Spacer from "./Spacer"
import { Context as LocationContext } from "../context/LocationContext"
import { Context as TrackContext } from "../context/TrackContext"
import useSaveTrack from "../hooks/useSaveTrack"

const TrackForm = () => {
    const { state, stopRecording, startRecording, changeName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()

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
                    onPress={saveTrack}
                />
                :
                null
            }
        </Spacer>

    </>
}

export default TrackForm