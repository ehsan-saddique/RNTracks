import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "./src/context/AuthContext";
import { setNavigator } from "./src/helpers/navigationRef";
import AccountScreen from "./src/screens/AccountScreen";
import AuthSplashScreen from "./src/screens/AuthSplashScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { FontAwesome } from "@expo/vector-icons"

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={24}></FontAwesome>
}

const switchNavigator = createSwitchNavigator({
  SplashScreen: AuthSplashScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <Provider>
          <App ref={(navigator) => setNavigator(navigator)} />
        </Provider>
      </LocationProvider>
    </TrackProvider>
  )
}