import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';;
import Home from './Screen/Home';
import Create from './Screen/Create';
import ResourceDetail from './Screen/ResourceDetail';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const HeaderStyle = {
  title: "Resources List",
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#002223"
  }
}

function App() {
  return (
    <View style={styles.container} >
      {/* <Text style={styles.textStyle}>Hello Django React-Native!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={HeaderStyle}
        />

        <Stack.Screen name="Create" component={Create}
          options={{ ...HeaderStyle }, title = "Create"}
        />

        <Stack.Screen name="ResourceDetail" component={ResourceDetail}
          options={{ ...HeaderStyle }, title = "Resource Detail"}
        />

      </Stack.Navigator>
    </View>


  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: Constants.statusBarHeight,

  },
  textStyle: {
    fontSize: 25,
    color: "white",
    marginTop: 10,
  },
});
