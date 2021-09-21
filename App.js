import React, { useState, useEffect } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Resources from './Screen/Resources';
import Create from './Screen/Create';
import ResourceDetail from './Screen/ResourceDetail';
import JobList from './Screen/JobList';
import JobDetail from './Screen/JobDetail';
import Blog from './Screen/Blog';
import Profile from './Screen/Profile';
import OnboardingScreen from './Screen/OnboardingScreen';
import BlogDetail from './Screen/BlogDetail'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      console.log(value);
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
      else {
        setIsFirstLaunch(false)
      }
    })
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <>
        <StatusBar backgroundColor='#000' barStyle='light-content' />
        <NavigationContainer>
          <HomeStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#002223',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          >
            <HomeStack.Screen
              name="Onboarding"
              component={OnboardingScreen}
              options={({ route }) => ({
                header: () => null,
              })}

            />
            <HomeStack.Screen
              name="Resources"
              component={HomeStackScreen}
              options={({ route }) => {
                // backgroundColor: "#002223";


                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Resources';

                switch (routeName) {
                  case 'Job List': {
                    return {
                      headerTitle: 'Job List',
                    };
                  }
                  case 'Blog': {
                    return {
                      headerTitle: 'Blog',
                    };
                  }
                  case 'Resources': {
                    return {
                      headerTitle: 'Resources',
                    };
                  }
                  case 'Profile':
                  default: {
                    return {
                      headerTitle: 'Profile',
                    };
                  }
                }

              }}

            />
            <HomeStack.Screen name="Create" component={Create} options={{
              title: 'Create',
            }} />

            <HomeStack.Screen name="Resource-Detail" component={ResourceDetail} options={{
              title: 'Resource Detail',
            }} />
            <HomeStack.Screen name="Job List" component={JobList} options={{
              headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" ></Icon.Button>
              )
            }} />
            <HomeStack.Screen name="Job-Detail" component={JobDetail} options={{
              title: 'Job Detail',
            }} />
            <HomeStack.Screen name="Blog-Detail" component={BlogDetail} options={{
              title: 'Blog Detail',
            }} />

          </HomeStack.Navigator>
        </NavigationContainer>
      </>
    );
  }
  else {
    return (
      <>
        <StatusBar backgroundColor='#000' barStyle='light-content' />
        <NavigationContainer>
          <HomeStack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#002223',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          >
            <HomeStack.Screen
              name="Resources"
              component={HomeStackScreen}
              options={({ route }) => {
                // backgroundColor: "#002223";


                const routeName = getFocusedRouteNameFromRoute(route) ?? 'Resources';

                switch (routeName) {
                  case 'Job List': {
                    return {
                      headerTitle: 'Job List',
                    };
                  }
                  case 'Blog': {
                    return {
                      headerTitle: 'Blog',
                    };
                  }
                  case 'Resources': {
                    return {
                      headerTitle: 'Resources',
                    };
                  }
                  case 'Profile':
                  default: {
                    return {
                      headerTitle: 'Profile',
                    };
                  }
                }

              }}

            />
            <HomeStack.Screen name="Create" component={Create} options={{
              title: 'Create',
            }} />

            <HomeStack.Screen name="Resource-Detail" component={ResourceDetail} options={{
              title: 'Resource Detail',
            }} />
            <HomeStack.Screen name="Job List" component={JobList} options={{
              headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#002223" ></Icon.Button>
              )
            }} />
            <HomeStack.Screen name="Job-Detail" component={JobDetail} options={{
              title: 'Job Detail',
            }} />
            <HomeStack.Screen name="Blog-Detail" component={BlogDetail} options={{
              title: 'Blog Detail',
            }} />

          </HomeStack.Navigator>
        </NavigationContainer>
      </>
    )
  }

};

export default MainTabScreen;
const HomeStackScreen = ({ navigation }) => (
  <Tab.Navigator>
    <Tab.Screen
      name="Resources"
      component={Resources}
      options={{
        tabBarLabel: 'Resources ',
        tabBarColor: '#002223',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}

    />
    <Tab.Screen
      name="Job List"
      component={JobList}
      options={{
        tabBarLabel: 'Job',
        tabBarColor: '#002223',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-search-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Blog"
      component={Blog}
      options={{
        tabBarLabel: 'Blog',
        tabBarColor: '#002223',
        tabBarIcon: ({ color }) => (
          <Icon name="clipboard-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#002223',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
