import React from "react"
import { } from "react-native"
import createDataContext from "./createDataContext"
import TrackerApi from "../api/tracker"


const trackReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_TRACKS":
            return action.payload
        default:
            return state
    }
}


const fetchTracks = dispatch => async () => {
    const response = await TrackerApi.get("/tracks")
    dispatch({ type: "FETCH_TRACKS", payload: response.data })
}

const createTrack = dispatch => async (name, locations) => {
    try {
        console.log("Creating track..")
        await TrackerApi.post("/tracks", { name, locations })
        console.log("Track created successfully")
    }
    catch (err) {
        console.log("Create track failed: ")
        console.log(err.response.data)
    }
}



export const { Context, Provider } = createDataContext(trackReducer,
    { fetchTracks, createTrack },
    [])