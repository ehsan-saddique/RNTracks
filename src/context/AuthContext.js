import React from "react"
import { } from "react-native"
import createDataContext from "./createDataContext"
import trackerApi from "../api/tracker"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigate } from "../helpers/navigationRef"


const authReducer = (state, action) => {
    switch (action.type) {
        case "signin":
            return { errorMessage: "", token: action.payload }
        case "addError":
            return { ...state, errorMessage: action.payload }
        case "clearError":
            return { ...state, errorMessage: "" }
        case "signout":
            return { token: null, errorMessage: "" }
        default:
            return state
    }
}

const signup = dispatch => async ({ email, password }) => {
    try {
        console.log("Tyring to sign up using: " + email)

        const response = await trackerApi.post("/signup", { email, password })
        await AsyncStorage.setItem("token", response.data.token)
        dispatch({ type: "signin", payload: response.data.token })

        navigate("TrackList")
    } catch (err) {
        dispatch({ type: "addError", payload: "Something went wrong." })
        console.log(err.response.data)
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        console.log("Tyring to sign in using: " + email)

        const response = await trackerApi.post("/signin", { email, password })
        await AsyncStorage.setItem("token", response.data.token)
        dispatch({ type: "signup", payload: response.data.token })

        navigate("TrackList")
    } catch (err) {
        dispatch({ type: "addError", payload: "Something went wrong." })
        console.log(err.response.data)
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem("token")
    if (token) {
        dispatch({ type: "signup", payload: token })

        navigate("TrackList")
    }
    else {
        navigate("loginFlow")
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem("token")
    dispatch({ type: "signout" })
    navigate("loginFlow")
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: "clearError" })
}

export const { Context, Provider } = createDataContext(authReducer, { signin, signout, signup, clearErrorMessage, tryLocalSignin }, { token: null, errorMessage: "" })