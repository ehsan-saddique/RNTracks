## Introduction
A simple app which lets users create and save tracks while running, walking or driving. Saved tracks are then shown on a map to user.

## Overview
* This app has an authentication system. And all the user data is stored on cloud.
* REST API is written in Express and needs to be hosted somewhere. In this case Express API was hosted locally using `npm` `JSON Server` [Details](https://www.npmjs.com/package/json-server)
* `Ngrok` was used to communicate between `JSON Server` and `React Native App`. [Ngrok Details](https://ngrok.com)
* `MongoDB` cloud atlas was used to host the data.

## Features
* Signup
* Signin
* Tab View
* List of saved tracks
* Detail view of each track
* Map View with track route drawn over it
* Create Track screen
* Logout

## Technologies Used
* React Native
* RN Maps Library
* RN Async Storage
* RN Elements
* RN Tabs
* Axios
* ExpressJS
* Json Server
* Ngrok
* MongoDB
* useState
* useReducer
* useContext
* Providers
* Context
* Expo cli
