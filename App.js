// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Constants from 'expo-constants';;
// import Home from './Screen/Home';
// import Create from './Screen/Create';
// import ResourceDetail from './Screen/ResourceDetail';
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// const Stack = createStackNavigator()

// const HeaderStyle = {
//   title: "Resources List",
//   headerTintColor: "#fff",
//   headerStyle: {
//     backgroundColor: "#002223"
//   }
// }

// function App() {
//   return (
//     <View style={styles.container} >
//       {/* <Text style={styles.textStyle}>Hello Django React-Native!</Text> */}
//       {/* <StatusBar style="auto" /> */}
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home}
//           options={HeaderStyle}
//         />

//         <Stack.Screen name="Create" component={Create}
//           options={{ ...HeaderStyle }, title = "Create"}
//         />

//         <Stack.Screen name="Resource-Detail" component={ResourceDetail}
//           options={{ ...HeaderStyle }, title = "Resource Detail"}
//         />

//       </Stack.Navigator>
//     </View>


//   );
// }

// export default () => {
//   return (
//     <NavigationContainer>
//       <App />
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     marginTop: Constants.statusBarHeight,

//   },
//   textStyle: {
//     fontSize: 25,
//     color: "white",
//     marginTop: 10,
//   },
// });



import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './Screen/Home';
import Create from './Screen/Create';
import ResourceDetail from './Screen/ResourceDetail';
import { NavigationContainer } from '@react-navigation/native'


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <>
    <StatusBar backgroundColor='#000' barStyle='light-content' />
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#002223',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={DetailsStackScreen}
          options={{
            tabBarLabel: 'Job',
            tabBarColor: '#002223',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-search-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"

          component={BlogStackScreen}
          options={{
            tabBarLabel: 'Blog',
            tabBarColor: '#002223',
            tabBarIcon: ({ color }) => (
              <Icon name="clipboard-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#002223',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-person" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#002223',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={Home} options={{
      title: 'Resource List',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />
    <HomeStack.Screen name="Create" component={Create} options={{
      title: 'Create',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" onPress={() => navigation.openDrawer()}></Icon.Button>
      )
    }} />

    <HomeStack.Screen name="Resource-Detail" component={ResourceDetail} options={{
      title: 'Resource Detail',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" onPress={() => navigation.openDrawer()} ></Icon.Button>
      )
    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#002223',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Job" component={Home} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" ></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
);

const BlogStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#002223',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Blog" component={Home} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" ></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#002223',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Profile" component={Home} options={{
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" ></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
);